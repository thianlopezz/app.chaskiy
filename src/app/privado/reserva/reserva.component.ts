import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

import * as moment from 'moment';

import { ReservaService } from './reserva.service';
import { FormaPagoService } from '../services/forma-pago.service';
import { CurrentMonth } from '../models/current-month';

import { ToastService } from '../../compartido/services/toast.service';
import { TarifaService } from '../tarifa/tarifa.service';
import { AerolineaService } from '../services/aerolinea.service';
import { FuenteService } from '../services/fuente.service';
import { AdicionalService } from '../adicional/adicional.service';
import { PaisService } from '../services/pais.service';
import { PagoService } from '../pagos/pago.service';

declare var jQuery: any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit, AfterViewChecked {

  accion = 'I';
  model: any = {};

  // MODELO DE PAGO PARA CANCELAR REGISTRO
  modelPago;

  // PARA HANDLE LOS CAMBIOS EN MODAL
  // DE PAGOS
  idReserva;
  totalReserva;

  // LOADING DETALLES RESERVA
  loadingDetalle;

  // ARREGLO DE RESERVAS QUE LLEGAN DESDE LA BD
  reservasBD: any[] = [];
  // PARA MANJAR LA CANCELACION DE MODIFICACION
  reservasBDOld: any[] = [];

  // ARREGLO DE RESERVAS PARA GUARDAR EN LA BD
  reservasCliente: any[] = [];

  // PARA MENJAR LA CANCELACION DE MODIFICACION
  habitacionesOld = [];

  // PARA CONTROLAR LOS CAMBIOS DE MES
  current: CurrentMonth;

  // LOADING DEL COMPONENTE
  loading;

  contEdita = 0;

  // TODOS LOS CATALOGOS
  formaPagos = [];
  tarifas = [];
  tarifasFormat = [];
  adicionales = [];
  paises = [];
  aerolineas = [];
  fuentes = [];

  // BANDERA PARA CONFIRMACION
  accionConfirmacion;
  mensajeConfirmacion;

  constructor(private cdRef: ChangeDetectorRef,
    private reservaService: ReservaService,
    private pagoService: PagoService,
    private formaService: FormaPagoService,
    private tarifaService: TarifaService,
    private adicionalService: AdicionalService,
    private paisService: PaisService,
    private aerolineaService: AerolineaService,
    private fuenteService: FuenteService,
    private toastService: ToastService) {

  }

  ngOnInit() {

    this.model.pasajero = {};
    // this.model.notas = '';
    // this.model.ident = true;

    this.model.pago = {};

    this.model.totalPagado = 0;
    this.model.saldo = 0;

    // OBTENER RESERVAS DE MES ACTUAL
    this.getReservasByDate();

    // CARGA DE CATALOGOS
    this.loadAllFormaPagos();
    this.loadAllFuentes();
    this.loadAllAirlines();
    this.loadAllTarifas();
    this.loadAllPaises();
    this.loadAllAdicionales();

  }

  ngAfterViewChecked() {
    // PARA CONTROLAR LA CREACION DE TOOLTIPS
    jQuery('[data-toggle="tooltip"]').tooltip();
    this.cdRef.detectChanges();
  }

  onGuardarSuccess() {

    this.onCerrar();
    this.getReservasByDate(this.current);
  }

  delete() {

    this.loading = true;

    this.model.accion = 'D';

    this.reservaService.mantenimiento(this.model)
      .subscribe(
        response => {

          this.loading = false;

          if (response.success) {

            this.onCerrar();
            this.toastService.showSuccess(response.mensaje);
            jQuery('#estadosModal').modal('hide');
            jQuery('#reservaModal').modal('hide');
          } else {
            this.toastService.showError(response.mensaje);
          }
        },
        error => {

          this.loading = false;
          this.toastService.showError('Ocurrió un error al cancelar la reserva.');
          console.log(error);
        });
  }

  cambiaEstado() {

    this.loading = true;

    let mensaje = '';
    let mensaje_err = '';

    switch (this.model.a_estado) {
      case 'Re':
        mensaje = 'Reserva confirmada con exito';
        mensaje_err = 'Ocurrió un error al confirmar la reserva';
        break;
      case 'Ca':
        mensaje = 'Proforma cancelada con exito';
        mensaje_err = 'Ocurrió un error al cancelar la proforma';
        break;
    }

    const reserva = {
      estado: this.model.a_estado,
      idReserva: this.model.idReserva,
      detalleEstado: this.model.observacion
    };

    this.reservaService.cambiaEstado(reserva)
      .subscribe(
        response => {

          this.loading = false;

          if (response.success) {

            this.toastService.showSuccess(mensaje);
            this.getReservasByDate(this.current);
            jQuery('#reservaModal').modal('hide');
          } else {
            this.toastService.showError(response.mensaje);
          }
        },
        error => {
          console.log(error);
          this.loading = false;
          this.toastService.showError(mensaje_err);
        });
  }

  cancelaPago() {

    this.modelPago.idReserva = this.idReserva;
    this.modelPago.accion = 'D';

    const mensajeError = 'Ocurrió un error al eliminar el pago';

    this.pagoService.mantenimiento(this.modelPago)
      .subscribe(
        response => {

          if (response.success) {
            this.toastService.showSuccess(response.mensaje);

            // DE ALGUNA MENERA DEBO CAMBIAR idReserva
            // PARA QUE DETECTE Y VAYA A NGONCHANGE DEL MODAL PAGOS
            // Y QUE CARGUE LOS REGISTROS DESDE LA BD
            if (Number.isInteger(this.idReserva)) {
              this.idReserva = '' + this.idReserva;
            } else {
              this.idReserva = Number(this.idReserva);
            }

            jQuery('#confirmaModal').modal('hide');
            jQuery('#pagosModal').modal('show');
          } else {
            this.toastService.showError(response.mensaje);
          }
        },
        error => {

          console.log(error);
          this.toastService.showError(mensajeError);
        });
  }

  onReservar(reservados) {

    this.accion = 'I';

    // ASIGNO LOS RESERVADOS QUE VIENE DEL COMPONENTE CALENDARIO
    this.reservasCliente = reservados;

    // ASIGNO EL NUEVO MODELO PARA QUE LOS COMPONENTES
    // REGISTREN EL CAMBIO DE ESTADO
    this.model = Object.assign({ habitaciones: this.reservasCliente }, this.model);
    jQuery('#reservaModal').modal('show');
  }

  onSetModiReserva(model) {

    this.model = model;
    this.accion = 'U';

    if (this.contEdita === 0) {
      this.reservasBDOld = Object.assign([], this.reservasBD);
      this.habitacionesOld = Object.assign([], this.model.habitaciones);
    }

    this.contEdita++;

    let cont = 0;

    while (this.model.habitaciones.length !== cont) {

      for (let i = 0; i < this.reservasBD.length; i++) {
        if (this.reservasBD[i].idReserva === this.model.idReserva) {
          this.reservasBD.splice(i, 1);
          cont++;
        }
      }
    }
    this.reservasCliente = this.model.habitaciones;

    jQuery('#reservaModal').modal('hide');
  }

  onModiReserva(reservadosCliente) {

    // this.reservadosCliente = this.reservadosCliente;
    // this.model.habitaciones = this.reservadosCliente;

    this.reservasCliente = reservadosCliente;
    this.model.habitaciones = reservadosCliente;
    this.model = Object.assign({}, this.model);
    jQuery('#reservaModal').modal('show');
  }

  // CUANDO CANCELA LA MODIFICACION
  // AL MOMENTO DE ESCOGER LAS HABITACIONES
  onCancelarModi() {

    this.accion = 'I';

    this.contEdita = 0;
    this.reservasCliente = [];
    this.reservasBD = Object.assign([], this.reservasBDOld);
    this.model.habitaciones = Object.assign([], this.habitacionesOld);
    jQuery('#reservaModal').modal('show');
  }

  // CERRAR DESDE MODAL
  onCerrar() {

    this.accion = 'I';

    if (this.contEdita > 0) {

      this.reservasBD = Object.assign([], this.reservasBDOld);
      this.model.habitaciones = Object.assign([], this.habitacionesOld);
    }

    this.model = {};
    this.model.pasajero = {};
    this.model.notas = '';
    // this.model.ident = true;
    this.reservasCliente = [];

    this.contEdita = 0;
  }

  onSetCancelarReserva() {
    this.mensajeConfirmacion = '¿Estás seguro de cancelar la Reserva?';
    // CANCELAR
    this.accionConfirmacion = 'CANCELAR_RESERVA';
    this.model.a_estado = 'Ca';
    this.model = Object.assign({}, this.model);
    jQuery('#reservaModal').modal('hide');
    jQuery('#confirmaModal').modal('show');
  }

  onSetCancelarPago(model) {
    this.mensajeConfirmacion = '¿Estás seguro de eliminar el pago por $' + model.monto + '?';
    // CANCELAR
    this.accionConfirmacion = 'CANCELAR_PAGO';
    this.modelPago = model;
    jQuery('#pagosModal').modal('hide');
    jQuery('#confirmaModal').modal('show');
  }

  onConfirma() {
    if (this.accionConfirmacion === 'CANCELAR_RESERVA') {

      jQuery('#confirmaModal').modal('hide');
      jQuery('#estadosModal').modal('show');
    } else if (this.accionConfirmacion === 'CANCELAR_PROFORMA'
      || this.accionConfirmacion === 'CONFIRMAR_PROFORMA') {
      this.cambiaEstado();
      jQuery('#confirmaModal').modal('hide');
    } else if (this.accionConfirmacion === 'CANCELAR_PAGO') {
      this.cancelaPago();
    }
  }

  onCancelaConfirma() {
    jQuery('#confirmaModal').modal('hide');
    if (this.accionConfirmacion === 'CANCELAR_PAGO') {
      jQuery('#pagosModal').modal('show');
    } else {
      jQuery('#reservaModal').modal('show');
    }
  }

  onCancelaEstados() {
    jQuery('#estadosModal').modal('hide');
    jQuery('#reservaModal').modal('show');
  }

  onSuccessEstados() {
    this.getReservasByDate(this.current);
  }

  onCambiarEstado(estado) {
    if (estado === 'Ca') {

      this.mensajeConfirmacion = '¿Estás seguro de cancelar la Proforma?';
      // CANCELAR PROFORMA
      this.accionConfirmacion = 'CANCELAR_PROFORMA';
      this.model.a_estado = estado;
      this.model = Object.assign({}, this.model);
      jQuery('#reservaModal').modal('hide');
      jQuery('#confirmaModal').modal('show');
    } else if (estado === 'Re') {

      this.mensajeConfirmacion = '¿Estás seguro de confirmar la Proforma?';
      // CANCELAR PROFORMA
      this.accionConfirmacion = 'CONFIRMAR_PROFORMA';
      this.model.a_estado = estado;
      this.model = Object.assign({}, this.model);
      jQuery('#reservaModal').modal('hide');
      jQuery('#confirmaModal').modal('show');
    } else {
      // ESTADOS Ci Co
      jQuery('#reservaModal').modal('hide');
      this.model.a_estado = estado;
      this.model = Object.assign({}, this.model);
      jQuery('#estadosModal').modal('show');
    }
  }

  onDetalle(params) {

    this.loadingDetalle = true;

    this.accion = undefined;
    const { _room, dia, current } = params;

    // CAPTURO LA FECHA DEL CUADRITO CLICK
    const clickCuadrito = moment({ y: current.anio, M: current.noMonth, d: dia });

    // BUSCO LA RESERVA
    const indexReservaBD = this.reservasBD.findIndex(x => x.idHabitacion === _room.idHabitacion
      && clickCuadrito >= moment(x.feDesde, 'DD[/]MM[/]YYYY')
      && clickCuadrito <= moment(x.feHasta, 'DD[/]MM[/]YYYY'));

    jQuery('#reservaModal').modal('show');

    // ENVIO EL ID DE LA RESERVA QUE ENCONTRAMOS
    this.reservaService.getById(this.reservasBD[indexReservaBD].idReserva).subscribe(
      reservas => {

        this.loadingDetalle = false;

        if (reservas.success) {
          // tslint:disable-next-line:prefer-const
          let model = reservas.data[0];
          this.idReserva = model.idReserva;
          this.totalReserva = model.total;
          // CONFIGURO LAS FECHAS TIPO DATE()
          model.habitaciones = this.setDateHab(model.habitaciones);
          this.model = Object.assign({}, model);
          jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        } else {
          this.loadingDetalle = false;
          this.toastService.showError('Ocurrió un error al obtener la reserva.');
        }
      });
  }

  onPagos() {
    jQuery('#reservaModal').modal('hide');
    jQuery('#pagosModal').modal('show');
  }

  onSucessPago(totalPagado) {
    // REGRESO EL TOTAL PAGADO PARA ACTUALIZAR EL OBJETO
    if (totalPagado !== undefined) {
      this.model.totalPagado = totalPagado;
      this.model = Object.assign({}, this.model);
    }
  }

  private setDateHab(habitaciones: any[]) {

    for (let i = 0; i < habitaciones.length; i++) {

      habitaciones[i].feDesde = moment(habitaciones[i].feDesde, 'DD[/]MM[/]YYYY').toDate();
      habitaciones[i].feHasta = moment(habitaciones[i].feHasta, 'DD[/]MM[/]YYYY').toDate();
    }

    return habitaciones;
  }

  getReservasByDate(current?: CurrentMonth) {

    if (!current) {
      this.current = new CurrentMonth();
    } else {
      this.current = current;
    }

    const feDesde = moment({ y: this.current.anio, M: this.current.noMonth, d: 1 });

    const feHasta = feDesde.clone().endOf('month').format('DD[/]MM[/]YYYY');

    this.reservaService.getByDate('C', feDesde.format('DD[/]MM[/]YYYY'), feHasta).subscribe(
      reservas => {

        if (reservas.success) {
          this.reservasBD = reservas.data;
        } else {
          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }

  private loadAllFormaPagos() {

    this.formaService.get().subscribe(formas => {

      if (formas.success) {
        this.formaPagos = formas.data;
      } else {
        console.log('Error>> loadAllFormaPagos>> ' + formas.mensaje);
      }
    });
  }

  private loadAllTarifas() {

    this.tarifaService.getAll()
      .subscribe(response => {

        if (response.success) {
          this.tarifasFormat = response.agrupado;
          this.tarifas = response.data;
        } else {
          console.log('Error>> loadAllRooms>> ' + response.mensaje);
        }
      });
  }

  private loadAllAirlines() {

    this.aerolineaService.get()
      .subscribe(response => {

        if (response.success) {
          this.aerolineas = response.data;
        } else {
          console.log('Error>> loadAllAirlines>> ' + response.mensaje);
        }
      });
  }

  private loadAllFuentes() {

    this.fuenteService.get()
      .subscribe(response => {

        if (response.success) {
          this.fuentes = response.data;
        } else {
          console.log('Error>> loadAllFuentes>> ' + response.mensaje);
        }
      });
  }

  private loadAllAdicionales() {

    this.adicionalService.get().subscribe(
      response => {

        if (response.success) {
          this.adicionales = response.data;
        } else {
          console.log('Error>> loadAllFormaPagos>> ' + response.mensaje);
        }
      });
  }

  private loadAllPaises() {

    this.paisService.get().subscribe(
      response => {
        if (response.success) {
          this.paises = response.data;
        } else {
          console.log('Error>> loadAllFormaPagos>> ' + response.mensaje);
        }
      });
  }

}
