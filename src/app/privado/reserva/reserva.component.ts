import { Component, OnInit, OnDestroy, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from './reserva.service';
import { HabitacionService } from '../habitacion/habitacion.service';
import { AdicionalService } from '../adicional/adicional.service';
import { PagoService } from '../pagos/pago.service';
import { AerolineaService } from '../services/aerolinea.service';
import { PasajeroService } from '../services/pasajero.service';
import { PaisService } from '../services/pais.service';
import { FormaPagoService } from '../services/forma-pago.service';
import { FuenteService } from '../services/fuente.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { CurrentMonth } from '../models/current-month';

import { ToastService } from '../../compartido/services/toast.service';

import { TarifaService } from '../../privado/tarifa/tarifa.service';
declare var jQuery: any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit, AfterViewChecked, OnDestroy {

  modiTotal = false;
  esTotal = false;
  total0 = 0;
  total0od;

  tarifas = [];
  tarifasall = [];
  paso = 1;

  rooms = [];
  user: any = {};
  current: CurrentMonth;

  reservados: any[] = [];
  reservadosDb: any[] = [];
  reservadosDbOd: any[] = [];

  formaPagos: any[] = [];

  habitacionesOd: any[] = [];

  aerolineas = [];

  model: any = {};

  noReserve = 0;

  loading = false;

  accion = 'I';
  esModi = true;

  contEdita = 0;

  jQuery: any;


  adicionales = [];
  // optionsAdi: Select2Options;
  valueAd: string[];

  _adicionales: any[];

  paises = [];
  valuePa: string;

  subscription: any;

  modiVal = false;
  auxValor: any = {
    idHabitacion: 0, habitacion: '', tarifa: 0,
    feDesde: new Date(), feHasta: new Date()
  };
  auxValor0: any = {};

  toDay: Date;

  pagos: any[] = [];

  goPass = false;
  editaPass_ = false;
  esPass;
  editedPass;

  passOd: any;

  fuentes: any[] = [];

  constructor(private router: Router,
    private cdRef: ChangeDetectorRef,
    private habitacionService: HabitacionService,
    private confirmacionService: ConfirmacionService,
    private confirmacionEventService: ConfirmacionEventService,
    private aerolineaService: AerolineaService,
    private pasajeroService: PasajeroService,
    private reservaService: ReservaService,
    private paisService: PaisService,
    private adicionalService: AdicionalService,
    private messService: MensajeService,
    private formaService: FormaPagoService,
    private pagoService: PagoService,
    private fuenteService: FuenteService,
    private tarifaService: TarifaService,
    private toastService: ToastService) {

  }

  ngOnInit() {

    const now = new Date();

    const dia = now.getDate();
    const mes = now.getMonth();
    const anio = now.getFullYear();

    this.toDay = new Date(anio, mes, dia, 0, 0, 0, 0);

    this.model.pass = {};
    this.model.notas = '';
    this.model.ident = true;
    this.current = new CurrentMonth();

    this.model.pago = {};

    this.model.totalPagado = 0;
    this.model.saldo = 0;

    this.loadAllTarifas();

    this.loadAllRooms();
    this.loadAllAirlines();
    this.loadAllFormaPagos();
    this.loadAllFuentes();
    this.setSelect2Paises();
    this.setSelect2Adicionales();
    this.getByDate();

    this.subscription = this.confirmacionEventService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  ngAfterViewChecked() {
    // this.changedAd(jQuery('#adicional').val());
    // this.cdRef.detectChanges();
  }

  selectedVal(resp) {

    if (resp === 'aceptar') {

      if (this.accion === 'D') {
        jQuery('#detalleEstadosModal').modal('show');
      } else
        if (this.accion === 'DP') {
          this.deletePago();
        }
    } else {

      if (resp.modo === 'Ci' || resp.modo === 'Co') {

        this.model.estadoDetalle = resp.model.observacion;
        this.check(resp.modo);
      } else
        if (resp.modo === 'Ca') {

          this.model.estadoDetalle = resp.model.observacion;
          this.delete();
        }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  changeTarifa(room) {
    room.tarifa = this.tarifasall.find(x => x.idtarifa === Number(room.idtarifa)).valor;
    this.esTotal = false;
    // room.idtarifa = $event.idtarifa;
  }

  siguiente() {

    if (this.model.habitaciones.length === 0) {
      this.toastService.showWarning('Selecciona al menos una habitación');
      return;
    }

    if (this.esTotal) {
      this.paso++;
      return;
    }

    const index = this.model.habitaciones.findIndex(x => x.idtarifa === undefined);

    if (index !== -1 && this.esModi) {
      this.toastService.showWarning('Todas las habitaciones deben tener asignada una tarifa.');
      return;
    }
    this.paso++;
  }

  atras() {
    this.paso--;
  }

  goTotal(opcion) {
    if (opcion === '!total') {
      this.total0 = this.model.total;
    }
    this.modiTotal = true;
    this.total0od = this.total0;
  }

  goModiTotal0() {
    this.esTotal = true;
    this.modiTotal = false;
    for (let i = 0; i < this.model.habitaciones.length; i++) {
      this.model.habitaciones[i].idtarifa = undefined;
      this.model.habitaciones[i].tarifa = 0;
    }
  }

  cancelTotal0() {
    if (this.esTotal) {
      this.total0 = this.total0od;
    }
    this.modiTotal = false;
  }

  next() {

    this.current.nextMonth();
    this.getByDate();
  }

  previous() {

    this.current.previousMonth();
    this.getByDate();
  }

  lockIdent() {

    this.model.ident = !this.model.ident;

    if (!this.model.ident) {
      this.esPass = false;
      this.model.pass.identificacion = '';
    } else {
      this.esPass = true;
    }
  }

  editaPass() {

    this.editaPass_ = true;
    this.editedPass = false;
    this.passOd = Object.assign({}, this.model.pass);
  }

  goEditaPass() {

    this.editaPass_ = false;
    this.goPass = true;
    this.model.pass.accion = 'U';
    this.model.pass.valuePa = this.valuePa;

    this.pasajeroService.mantenimiento(this.model.pass)
      .subscribe(
      data => {

        if (data.success) {

          this.goPass = false;
          this.editedPass = true;
        } else {

          this.goPass = false;
          // this.messService.error(data.mensaje);
          // this.showMess();
          this.toastService.showWarning(data.mensaje);
        }
      },
      error => {

        console.log(error);
        this.goPass = false;

        // this.messService.error('Hubo un error al actualizar el pasajero');
        // this.showMess();
        this.toastService.showWarning('Hubo un error al actualizar el pasajero');
      });
  }

  cancelEditaPass() {

    this.editaPass_ = false;
    this.model.pass = Object.assign({}, this.passOd);
  }

  getPasse(form: NgForm) {
    this.goPass = true;

    const correo = this.model.pass.correo;

    this.pasajeroService.getById(correo).subscribe(passenger => {

      if (passenger.success) {

        if (passenger.data.length === 0) {

          this.esPass = false;
          this.model.pass = {};
          // this.defaultPa();
          this.model.pass.correo = correo;
          this.model.notas = '';
          this.model.pass.ident = true;
        } else
          if (passenger.data.length > 0) {

            this.esPass = true;
            this.model.pass = passenger.data[0];
            this.model.pass.valuePa = this.model.pass.idPais;
            jQuery('#pais').val('' + this.model.pass.idPais);
            this.model.pass.ident = true;
          }
      } else {

      }

      this.goPass = false;
    });

  }

  guardar(form: NgForm) {

    this.loading = true;

    this.model.accion = this.accion;

    this.model.pass.valuePa = jQuery('#pais').val();

    let mensaje = '';
    let mensaje_err = '';

    switch (this.accion) {
      case 'I':
        mensaje = 'Reserva creada con éxito';
        mensaje_err = 'Ocurrió un error al crear la reserva';
        break;
      case 'U':
        mensaje = 'Reserva modificada con éxito';
        mensaje_err = 'Ocurrió un error al modificar la reserva';
        break;
    }

    if (this.model.esProforma) {
      this.model.estado = 'Pr';
    } else {
      this.model.estado = 'Re';
    }

    if (this.esTotal) {
      this.model.total = this.total0;
    }

    this.reservaService.mantenimiento(this.model)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.esPass = false;
          this.loadAllRooms();
          form.resetForm();
          this.getByDate();
          this.quitRes();

          jQuery('#reservaModal').modal('hide');
          this.toastService.showSuccess(mensaje);
          this.paso = 1;
        } else {

          this.loading = false;

          this.toastService.showError(data.mensaje);
        }
      },
      error => {

        console.log(error);
        this.loading = false;

        // this.messService.error(mensaje_err);
        // this.showMess();
        this.toastService.showError(mensaje_err);
      });
  }

  guardarPago(form: NgForm) {

    this.loading = true;

    this.model.pago.idReserva = this.model.idReserva;

    let mensaje = '';
    let mensaje_err = '';

    switch (this.accion) {
      case 'I':
        mensaje = 'Pago generado con éxito';
        mensaje_err = 'Ocurrió un error al generar el pago';
        break;
      case 'U':
        mensaje = 'Pago modificado con éxito';
        mensaje_err = 'Ocurrió un error al modificar el pago';
        break;
    }

    this.pagoService.mantenimiento(this.model.pago)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.getPagos();

          // this.messService.success(mensaje);
          // this.showMessPago();
          jQuery('#pagoModal').modal('hide');
          this.toastService.showSuccess(mensaje);
        } else {

          this.loading = false;
          // this.messService.error(data.mensaje);
          // this.showMessPago();
          this.toastService.showError(data.mensaje);
        }
      },
      error => {

        console.log(error);
        this.loading = false;

        // this.messService.error(mensaje_err);
        // this.showMessPago();
        this.toastService.showError(mensaje_err);
      });
  }

  delete() {

    this.loading = true;

    this.model.accion = 'D';

    const mensaje = 'Reserva cancelada con éxito';
    const mensaje_err = 'Ocurrió un error al cancelar la reserva';

    this.reservaService.mantenimiento(this.model)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.loadAllRooms();
          this.getByDate();

          jQuery('#detalleEstadosModal').modal('hide');

          // this.messService.success(mensaje);
          // this.showMess();

          jQuery('#reservaModal').modal('hide');
          this.toastService.showSuccess(mensaje);

          this.quitRes();
        } else {

          this.loading = false;

          // jQuery('#detalleEstadosModal').modal('hide');

          // this.messService.error(data.mensaje);
          // this.showMess();
          this.toastService.showError(data.mensaje);
        }
      },
      error => {

        console.log(error);
        this.loading = false;

        jQuery('#detalleEstadosModal').modal('hide');

        // this.messService.error(mensaje_err);
        // this.showMess();
        this.toastService.showError(mensaje_err);
      });
  }

  deletePago() {

    this.loading = true;

    this.model.pago.accion = 'D';
    this.model.pago.idReserva = this.model.idReserva;

    const mensaje = 'Pago eliminado con éxito';
    const mensaje_err = 'Ocurrió un error al eliminar el pago';

    this.pagoService.mantenimiento(this.model.pago)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.getPagos();

          // this.messService.success(mensaje);
          // this.showMessPago();
          jQuery('#pagoModal').modal('hide');
          this.toastService.showSuccess(mensaje);
        } else {

          this.loading = false;

          // this.messService.error(data.mensaje);
          // this.showMessPago();
          this.toastService.showError(data.mensaje);
        }
      },
      error => {

        console.log(error);
        this.loading = false;

        // this.messService.error(mensaje_err);
        // this.showMessPago();
        this.toastService.showError(mensaje_err);
      });
  }

  check(check: string) {

    this.loading = true;

    this.model.accion = 'Es';

    let mensaje = '';
    let mensaje_err = '';

    switch (check) {
      case 'Ci':
        mensaje = 'Check-in éxitoso';
        mensaje_err = 'Ocurrió un error en el check in';
        break;
      case 'Co':
        mensaje = 'Check-out éxitoso';
        mensaje_err = 'Ocurrió un error en el check-out';
        break;
      case 'Re':
        mensaje = 'Reserva confirmada con exito';
        mensaje_err = 'Ocurrió un error al confirmar la reserva';
        break;
      case 'Ca':
        mensaje = 'Reserva cancelada con exito';
        mensaje_err = 'Ocurrió un error al cancelar la reserva';
        break;
    }

    if (check === 'Co' && (this.model.total - this.model.totalPagado) > 0) {

      jQuery('#detalleEstadosModal').modal('hide');

      // this.messService.error('No se puede realizar el proceso de check-out debido a que hay un saldo pendiente');
      // this.showMess();
      this.toastService.showWarning('No se puede realizar el proceso de check-out debido a que hay un saldo pendiente');
      return;
    }

    this.model.estado = check;

    this.reservaService.mantenimiento(this.model)
      .subscribe(
      data => {

        if (data.success) {

          jQuery('#detalleEstadosModal').modal('hide');

          this.loading = false;
          this.loadAllRooms();
          this.getByDate();
          this.quitRes();

          // this.messService.success(mensaje);
          // this.showMess();
          jQuery('#reservaModal').modal('hide');
          this.toastService.showSuccess(mensaje);
        } else {

          jQuery('#detalleEstadosModal').modal('hide');

          this.loading = false;

          // this.messService.error(data.mensaje);
          // this.showMess();
          this.toastService.showError(data.mensaje);
        }
      },
      error => {

        jQuery('#detalleEstadosModal').modal('hide');

        console.log(error);
        this.loading = false;

        // this.messService.error(mensaje_err);
        // this.showMess();
        this.toastService.showError(mensaje_err);
      });
  }

  clickDay(_room, dia: number) {

    if (this.isReserved(_room, dia)) {
      this.getReserveDet(_room, dia);
    }

    const indexDb = this.findByIdDb(this.reservadosDb,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    if (indexDb !== -1) {

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
        && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        <= this.getDateString('/', this.reservadosDb[indexDb].feHasta)) {
        return;
      }
    }

    if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
      < new Date(new Date().getTime() - (1000 * 60 * 60 * 24))) {
      return;
    }

    if (_room.noClick === undefined) {
      _room.noClick = 1;
    }

    if (_room.noClick === 1) {

      this.marco(_room, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

      _room.noClick++;

      return;
    } else if (_room.noClick === 2) {

      this.marco(_room, new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

      _room.noClick = 1;

      return;
    }

    this.noReserve = this.reservados.length;
  }

  marco(_room, dateIn: Date) {

    const index = this.findById(this.reservados, _room.idHabitacion);

    if (_room.noClick === 1) {

      if (index === -1) {

        this.reservados.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn,
          feHasta: dateIn
        });

      } else {
        this.reservados.splice(index, 1);

        this.reservados.push({
          idHabitacion: _room.idHabitacion,
          habitacion: _room.habitacion,
          tarifa: _room.tarifa,
          feDesde: dateIn,
          feHasta: dateIn
        });
      }
    } else if (_room.noClick === 2) {

      if (index !== -1) {

        const obj = this.reservados[index];

        if (dateIn.getTime() === obj.feDesde.getTime() &&
          dateIn.getTime() === obj.feHasta.getTime()) {

          this.reservados.splice(index, 1);
        } else {

          obj.feHasta = dateIn;
          this.reservados[index] = obj;
        }

      }

    }
  }

  findById(arreglo: any[], id: number) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].idHabitacion === id) {
        return i;
      }
    }

    return -1;
  }

  findById0(arreglo: any[], id: number) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].idAdicional === id) {
        return i;
      }
    }

    return -1;
  }

  findByIdDb(arreglo: any[], id: number, feIn: Date) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].idHabitacion === id &&
        (feIn >= this.getDateString('/', arreglo[i].feDesde)
          && feIn <= this.getDateString('/', arreglo[i].feHasta))) {
        return i;
      }
    }

    return -1;
  }

  delReserve(_room) {

    const index = this.findById(this.reservados, _room.idHabitacion);

    if (index !== -1) {
      this.reservados.splice(index, 1);
    }

    this.noReserve = this.reservados.length;
  }

  getLim(_op: string, _room, dia: number) {

    const indexDb = this.findByIdDb(this.reservadosDb,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    if (indexDb !== -1) {

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0).getTime()
        === this.getDateString('/', this.reservadosDb[indexDb].feDesde).getTime()
        && _op === 'I') {
        return true;
      }

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0).getTime()
        === this.getDateString('/', this.reservadosDb[indexDb].feHasta).getTime()
        && _op === 'O') {
        return true;
      }
    }
  }

  isSelected(_room, dia: number) {

    const index = this.findById(this.reservados, _room.idHabitacion);
    const indexDb = this.findByIdDb(this.reservadosDb,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    if (indexDb !== -1) {

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
        && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        <= this.getDateString('/', this.reservadosDb[indexDb].feHasta)) {

        if (this.reservadosDb[indexDb].estado === 'Re') {
          return { '_reserved': true };
        } else if (this.reservadosDb[indexDb].estado === 'Ci') {
          return { '_occupied': true };
        } else if (this.reservadosDb[indexDb].estado === 'Co') {
          return { '_checked-out': true };
        } else if (this.reservadosDb[indexDb].estado === 'Pr') {
          return { '_proform': true };
        }
      }
    }

    if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
      < new Date(new Date().getTime() - (1000 * 60 * 60 * 24))) {
      return { '_blocked': true };
    }

    if (index !== -1) {

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        >= this.reservados[index].feDesde
        && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        <= this.reservados[index].feHasta) {
        return { '_selected': true };
      }
    }

    return { '_nah': true };
  }

  setReserva() {

    jQuery('#reservaModal').modal('show');

    setTimeout(() => {
      jQuery('#pais').select2();
      jQuery('#adicional').select2();

      const self = this;
      self.changedAd(jQuery('#adicional').val());
      jQuery('#adicional').on('select2:select', function (e) {
        self.changedAd(jQuery('#adicional').val());
      });

    }, 200);

    // this.setDay2();
    this.model.habitaciones = this.reservados;
    this.accion = 'I';
    this.esModi = true;
    this.pagos = [];
    this.paso = 1;
  }

  setDay2() {

    for (let i = 0; i < this.reservados.length; i++) {

      if (this.reservados[i].feDesde === this.reservados[i].feHasta) {

        this.reservados[i].feHasta = new Date(this.reservados[i].feHasta.getTime() + (1000 * 60 * 60 * 24));
      }
    }
  }

  getTotal() {

    if (!this.model.habitaciones || this.model.habitaciones.length === 0) {

      return 0;
    }

    const habitaciones = this.model.habitaciones;
    const adicionales = this.model.valueAd || [];

    let sum = 0;
    for (let i = 0; i < habitaciones.length; i++) {

      sum = sum + (this.nightDiff(habitaciones[i].feDesde, habitaciones[i].feHasta) * habitaciones[i].tarifa);
    }

    for (let i = 0; i < adicionales.length; i++) {

      sum = sum + (adicionales[i].tarifa * adicionales[i].cantidad);
    }

    this.model.total = sum;

    return this.model.total;
  }

  modiTarifa(room: any) {

    this.auxValor = Object.assign({}, room);
    this.modiVal = true;
  }

  modiTarifa0(adi: any) {

    this.auxValor0 = Object.assign({}, adi);
  }

  goModiVal() {

    this.auxValor = {
      idHabitacion: 0, habitacion: '', tarifa: 0,
      feDesde: new Date(), feHasta: new Date()
    };
    this.modiVal = false;
  }

  goModiVal0() {

    this.auxValor0 = { idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0 };
  }

  cancelTarifa(room: any) {

    const index = this.findById(this.model.habitaciones, room.idHabitacion);

    this.model.habitaciones[index] = Object.assign({}, this.auxValor);
    this.auxValor = {
      idHabitacion: 0, habitacion: '', tarifa: 0,
      feDesde: new Date(), feHasta: new Date()
    };
    this.modiVal = false;
  }

  cancelTarifa0(adi: any) {

    const index = this.findById0(this.model.valueAd, adi.idAdicional);

    this.model.valueAd[index] = Object.assign({}, this.auxValor0);
    this.auxValor0 = { idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0 };
  }

  private nightDiff(feDesde: Date, feHasta: Date) {

    return this.reservaService.getNumeroNoches(feDesde, feHasta);
  }


  // changedPa(e: any): void {

  //   this.model.pass.valuePa = e.value;
  // }

  changedAd(values): void {
    this.model.valueAd = [];

    for (let i = 0; i < values.length; i++) {

      // const index = this.findById0(this._adicionales, e.value[i]);
      const index = this._adicionales.findIndex(x => x.idAdicional === Number(values[i]));
      this._adicionales[index].cantidad = 1;
      this.model.valueAd.push(this._adicionales[index]);
    }

  }

  setAds(arreglo: any[]) {

    let valueAd = [];
    for (let i = 0; i < arreglo.length; i++) {
      valueAd.push('' + arreglo[i].idAdicional);
    }
    return valueAd;
  }

  // setPa(idPais: any): void {

  //   this.valuePa = '' + idPais;
  // }

  getWeekDay(dia: number) {

    const now = new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0);
    return this.current.dias[now.getDay()];
  }

  setModi() {

    for (let i = 0; i < this.model.habitaciones.length; i++) {
      this.model.habitaciones[i].modeltarifa = this.tarifasall.find(x => x.idtarifa === this.model.habitaciones[i].idtarifa);
    }

    this.esModi = true;
    this.paso = 1;

    if (this.contEdita === 0) {
      this.reservadosDbOd = Object.assign([], this.reservadosDb);
      this.habitacionesOd = Object.assign([], this.model.habitaciones);
    }

    this.contEdita++;

    let cont = 0;

    while (this.model.habitaciones.length !== cont) {

      for (let i = 0; i < this.reservadosDb.length; i++) {
        if (this.reservadosDb[i].idReserva === this.model.idReserva) {
          this.reservadosDb.splice(i, 1);
          cont++;
        }
      }
    }
    this.reservados = this.model.habitaciones;

    jQuery('#reservaModal').modal('hide');
  }

  setNuevoPago() {

    this.model.pago = {};
    this.model.pago.accion = 'I';
  }

  goModi() {

    // this.setDay2();
    this.model.habitaciones = this.reservados;


    jQuery('#reservaModal').modal('show');

    setTimeout(() => {
      jQuery('#pais').select2();
      jQuery('#adicional').select2();

      jQuery('#adicional').val(this.setAds(this.model.valueAd));
      jQuery('#adicional').trigger('change');

      const self = this;
      self.changedAd(jQuery('#adicional').val());
      jQuery('#adicional').on('select2:select', function (e) {
        self.changedAd(jQuery('#adicional').val());
      });
    }, 200);
  }

  quitModi() {

    this.reservadosDb = Object.assign([], this.reservadosDbOd);
    this.model.habitaciones = Object.assign([], this.habitacionesOd);
    this.reservados = [];
    this.esModi = false;
    this.contEdita = 0;

    jQuery('#reservaModal').modal('show');

    setTimeout(() => {
      jQuery('#pais').select2();
      jQuery('#adicional').select2();
    }, 200);
  }

  quitRes() {

    if (this.contEdita > 0) {

      this.reservadosDb = Object.assign([], this.reservadosDbOd);
      this.model.habitaciones = Object.assign([], this.habitacionesOd);
    }

    this.esPass = false;
    this.model = {};
    this.model.pass = {};
    this.model.notas = '';
    this.model.ident = true;
    this.reservados = [];
    this.valueAd = [];

    this.accion = 'I';
    this.contEdita = 0;
  }

  setCancel() {

    this.accion = 'D';
    this.model.a_estado = 'Ca';
    this.confirmacionService.go('¿Está seguro de cancelar la reserva?');
  }

  getReserveDet(_room, dia: number) {

    const indexDb = this.findByIdDb(this.reservadosDb, _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));
    this.esModi = false;

    this.esPass = true;
    this.model = {};
    this.model.pass = {};
    this.model.notas = '';
    this.model.ident = true;
    this.reservados = [];

    this.reservaService.getById(this.reservadosDb[indexDb].idReserva).subscribe(
      reservas => {

        if (reservas.success) {

          this.model = reservas.data[0];
          debugger;
          jQuery('#pais').val(this.model.pass.idPais);
          jQuery('#pais').trigger('change');

          // this.setAds(this.model.valueAd);

          // this.setPa(this.model.pass.idPais);
          this.model.habitaciones = this.setDateHab(this.model.habitaciones);

          if (this.model.habitaciones[0].tarifadet === '-') {
            this.esTotal = true;
            this.total0 = this.model.total;
          }

          this.accion = 'U';

          this.model.pago = {};

          this.getPagos();

          jQuery('#reservaModal').modal('show');

          setTimeout(() => {
            jQuery('#pais').select2();
            jQuery('#adicional').select2();
          }, 200);
        } else {

          console.log('Error>> getById>> ' + reservas.mensaje);
        }
      });
  }

  setElimPago(model: any) {

    this.accion = 'DP';
    this.model.pago = Object.assign({}, model);
    this.confirmacionService.go('¿Desea eliminar el registro?');
  }

  getPagos() {

    this.pagoService.getAll(this.model.idReserva)
      .subscribe(pagos => {
        if (pagos.success) {

          this.model.pago = {};
          this.pagos = pagos.data;

          let sum = 0;

          for (let i = 0; i < pagos.data.length; i++) {

            sum += pagos.data[i].monto;
          }

          this.model.totalPagado = sum;
        } else {

          console.log('Error>> pagoService>> ' + pagos.mensaje);
        }
      });
  }

  getToolTip(_op, _room, dia: number) {

    const indexDb = this.findByIdDb(this.reservadosDb,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));
    const reserva = this.reservadosDb[indexDb];

    if (_op === 'I') {
      return '' + reserva.pasajero;
    }

    if (_op === 'O') {
      return '' + reserva.pasajero;
    }

  }

  isReserved(_room, dia: number) {

    const indexDb = this.findByIdDb(this.reservadosDb,
      _room.idHabitacion,
      new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0));

    if (indexDb !== -1) {

      if (new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        >= this.getDateString('/', this.reservadosDb[indexDb].feDesde)
        && new Date(this.current.anio, this.current.noMonth, dia, 0, 0, 0, 0)
        <= this.getDateString('/', this.reservadosDb[indexDb].feHasta)) {
        return true;
      }

      return false;
    }

    return false;
  }

  ocultaBtnModi(op: string) {

    switch (op) {

      case 'Ci':

        if (this.model.estado === 'Co') {
          return false;
        }

        if (this.model.estado === 'Ci') {
          return false;
        }

        if (this.model.habitaciones[0].feDesde.getTime()
          === this.toDay.getTime()) {
          return true;
        }


        return false;
      case 'Co':

        if (this.model.estado === 'Ci') {
          return true;
        }

        return false;
      case 'D':

        if (this.model.estado === 'Ci') {
          return false;
        }

        if (this.model.estado === 'Co') {
          return false;
        }

        return true;
      case 'U':

        // if (this.toDay.getTime() < this.model.habitaciones[0].feDesde.getTime()) {
        //   return true;
        // }

        // return false;

        if (this.model.estado === 'Ci') {
          return false;
        }

        return true;
    }
  }

  getEstado() {

    return this.reservaService.getEstado(this.model);
  }

  private setDateHab(arreglo: any[]) {

    for (let i = 0; i < arreglo.length; i++) {

      arreglo[i].feDesde = this.getDateString('/', arreglo[i].feDesde);
      arreglo[i].feHasta = this.getDateString('/', arreglo[i].feHasta);
    }

    return arreglo;
  }

  // private defaultPa() {

  //   if (this.paises.length > 0) {

  //     this.valuePa = this.paises[0].id;
  //     this.model.pass.valuePa = this.valuePa;
  //   }
  // }

  private loadAllTarifas() {

    this.tarifaService.getAll().subscribe(tarifas => {

      if (tarifas.success) {

        this.tarifas = tarifas.agrupado;
        this.tarifasall = tarifas.data;
      } else {
        console.log('Error>> loadAllRooms>> ' + tarifas.mensaje);
      }
    });
  }

  private loadAllRooms() {

    this.habitacionService.getAll().subscribe(rooms => {

      if (rooms.success) {
        this.rooms = rooms.data;
      } else {
        console.log('Error>> loadAllRooms>> ' + rooms.mensaje);
      }
    });
  }

  private loadAllAirlines() {

    this.aerolineaService.getAll().subscribe(aerolineas => {

      if (aerolineas.success) {
        this.aerolineas = aerolineas.data;
      } else {
        console.log('Error>> loadAllAirlines>> ' + aerolineas.mensaje);
      }
    });
  }

  private loadAllFormaPagos() {

    this.formaService.getAll().subscribe(formas => {

      if (formas.success) {
        this.formaPagos = formas.data;
      } else {
        console.log('Error>> loadAllFormaPagos>> ' + formas.mensaje);
      }
    });
  }

  private loadAllFuentes() {

    this.fuenteService.getAll().subscribe(fuente => {

      if (fuente.success) {
        this.fuentes = fuente.data;
      } else {
        console.log('Error>> loadAllFuentes>> ' + fuente.mensaje);
      }
    });
  }

  private setSelect2Paises() {

    this.paisService.getAll().subscribe(
      paises => {

        if (paises.success) {

          for (let i = 0; i < paises.data.length; i++) {
            this.paises.push({ id: '' + paises.data[i].idPais, text: paises.data[i].pais });
          }

          // this.defaultPa();
        } else {
          console.log('Error>> loadAllFormaPagos>> ' + paises.mensaje);
        }

      });
  }

  private setSelect2Adicionales() {

    // this.optionsAdi = { multiple: true };

    this.adicionalService.getAll().subscribe(
      adicionales => {

        if (adicionales.success) {

          // this.adicionales = new Array<Select2OptionData>();
          this._adicionales = adicionales.data;

          for (let i = 0; i < adicionales.data.length; i++) {
            this.adicionales.push({ id: '' + adicionales.data[i].idAdicional, text: adicionales.data[i].adicional });
          }

        } else {
          console.log('Error>> loadAllFormaPagos>> ' + adicionales.mensaje);
        }
      });
  }

  private getByDate() {

    const feDesde = '01' + '/' + (this.current.noMonth + 1) + '/' + this.current.anio;
    const feHasta = this.current.finMes + '/' + (this.current.noMonth + 1) + '/' + this.current.anio;

    this.reservaService.getByDate('C', feDesde, feHasta).subscribe(
      reservas => {

        if (reservas.success) {

          this.reservadosDb = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }

  private getDateString(delimiter: string, date: string) {

    const auxDate = date.split(delimiter);
    return new Date(Number(auxDate[2]), Number(auxDate[1]) - 1, Number(auxDate[0]), 0, 0, 0, 0);
  }

  private showMess() {

    jQuery('#reservaModal').modal('hide');

    setTimeout(() => {

      jQuery('#messModal').modal('show');
    }, 200);
  }

  private showMessPago() {

    jQuery('#pagoModal').modal('hide');

    setTimeout(() => {

      jQuery('#messModal').modal('show');
    }, 200);
  }

}
