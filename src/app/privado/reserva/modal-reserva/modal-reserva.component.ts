import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../../compartido/services/toast.service';
import { PasajeroService } from '../../pasajero/pasajero.service';

declare var jQuery: any;

@Component({
  selector: 'app-modal-reserva',
  templateUrl: './modal-reserva.component.html',
  styleUrls: ['./modal-reserva.component.css']
})
export class ModalReservaComponent implements OnInit, OnChanges {

  @Input() model: any = {};
  @Input() accion;
  @Input() loadingDetalle;

  // CATALOGOS
  @Input() aerolineas = [];
  @Input() fuentes = [];
  @Input() paises = [];
  paisesFormat = [];
  @Input() tarifas = [];
  @Input() tarifasFormat = [];
  @Input() adicionales = [];

  @Output() guardarSuccess = new EventEmitter<any>();
  @Output() modificar = new EventEmitter<any>();
  @Output() cancelarReserva = new EventEmitter<any>();
  @Output() cerrar = new EventEmitter<any>();

  @Output() pagos = new EventEmitter<any>();

  @Output() cambiarEstado = new EventEmitter<any>();

  // CARGANDO DE COMPONENTE
  loading;

  // VARIABLE PARA CONTROLAR CAMBIO DE PASOS
  // EN MODAL
  paso = 1;

  // VARIABLE PARA CONTROLAR LA FECHA DEL DIA DE HOY
  toDay: Date;

  // BANDERA PARA DECIR QUE ES UN PASAJERO QUE YA SE ENCUENTRA REGISTRADO
  // SE MODIFICA DESDE LA BASE DE DATOS CUANDO SE HACE EL BLUR EL
  // TEXTBOX Y COMPRUEBA EN BD
  pasajeroRegistrado;

  // BANDERA PARA CONTROLAR LA MODIFICACION
  // DEL PASAJERO
  modificarPasajero = false;

  // PARECE QUE NO SIRVE PARA NADA XD
  // editedPass;

  // VARIABLE PARA GUARDAR EL ANTIGUO VALOR DEL PASAJERO
  pasajeroOld;

  // CARGANDO DE PASJARO
  // CUANDO LO VA A BUSCAR EN LA BD
  loadingPasajero;

  // CATALOGOS FORMATEADOS
  adicionalesFormat = [];

  // BANDERA PARA DECIR QUE NO/SI SE CONSIDERARON
  // TARIFAS PARA LA(S) HABITACION(ES) Y GUARDAR
  // CON UN VALOR TOTAL DE RESERVA
  esTotal = false;

  // BANDERA PARA CONTROLAR LA MODIFICACION
  // DEL TOTAL DE LA RESERVA
  modificarTotal = false;

  // VARIABLE DONDE SE ASIGNA EL TOTAL DE LA RESERVA
  // EN CASO DE QUE esTotal = true;
  total = 0;

  // VARIABLE PARA GUARDAR EL VALOR ANTIGUO DEL VALOR
  // TOTOTAL DE LA RESERVA
  totalOld;

  auxAdicional: any = {};

  auxHabitacion: any = {
    idHabitacion: 0, habitacion: '', tarifa: 0,
    feDesde: new Date(), feHasta: new Date()
  };

  constructor(private reservaService: ReservaService,
    private pasajeroService: PasajeroService,
    private toastService: ToastService) { }

  ngOnInit() {

  }

  ngOnChanges() {

    // VERIFICO SI EL MODEL DE LA RESERVA QUE LLEGA AL COMPONENTE ES DE TIPO 'TOTAL'
    if (this.model && this.model.habitaciones && this.model.habitaciones[0].tarifadet === '-') {
      this.esTotal = true;
      this.total = this.model.total;
    }

    // SETEO LOS SELECTS
    setTimeout(() => {
      this.setSelects();
    }, 10);

    // SETEAMOS CATALOGOS
    this.setAdicionalesFormat();
    this.setPaisesFormat();
  }

  setSelects() {

    // ARTIFICIO PARA OBTENER FUNCIONES DENTRO DE LOS
    // EVENTS DE JQUERY - SELECT2
    const self = this;

    // DOS POSIBILIDADES DE ACCION
    // INSERTAR
    if (this.accion === 'I') {

      // RESERVA Y TOTAL FALSO
      this.model.estado = 'Re';
      this.esTotal = false;

      // INICIALIZO LOS SELECT2
      jQuery('.form-control.tarifa').select2();
      jQuery('#adicional').select2();
      jQuery('#pais').select2();

      // VACIO LOS SELECT
      jQuery('#adicional').val([]);

      // ASIGNO EVENTOS
      // EVENTO SELECT - ADICIONAL
      jQuery('#adicional').on('select2:select', function (e) {

        // EJECUTO EL CAMBIO DE ADICIONAL
        self.handleChangeAdicional(jQuery('#adicional').val());
      });

      // ASIGNO EVENTO A CLASE TARIFA .tarifa
      jQuery('.form-control.tarifa').on('select2:select', function (e) {

        // DE ESTA MANERA CAPTURO EL ID DE LA HABITACION
        // ESTE ID SE AUTGENERO DENTRO DEL FOR DE CADA ROW
        // DE HABITACION AGREGADA, DESDE EL ATRIBUTO NAME
        const idHabitacion = e.target.name.split('-')[1];

        self.handleChangeAdicional(jQuery('#adicional').val());
        self.handleChangeTarifa(idHabitacion, e.target.value);
      });

      // ASIGNO LA PRIMERA TARIFA POR DEFAULT
      if (this.model.habitaciones) {

        this.model.habitaciones.forEach(habitacion => {

          if (this.tarifas.length) {
            habitacion.idTarifa = this.tarifas[0].idTarifa;
            habitacion.tarifa = this.tarifas[0].valor;
          }
        });
      }
    } else if (this.accion === 'U') {

      this.pasajeroRegistrado = true;

      // INICIALIZO SELECT2
      jQuery('.form-control.tarifa').select2();
      jQuery('#adicional').select2();
      jQuery('#pais').select2();

      // CARGO EL VALOR DE LOS DATOS EN LOS SELECT 2
      jQuery('#pais').val(this.model.pasajero.idPais);
      jQuery('#pais').trigger('change');

      jQuery('#adicional').val(this.setAdicionalesFormatoSelect2(this.model.adicionales));
      jQuery('#adicional').trigger('change');

      // ASIGNO LOS ADICINALES AL MODELO
      this.handleChangeAdicional(jQuery('#adicional').val());

      // CONFIGURO EVENTO ON CHANGE
      jQuery('#adicional').on('select2:select', function (e) {
        self.handleChangeAdicional(jQuery('#adicional').val());
      });

      jQuery('.form-control.tarifa').on('select2:select', function (e) {
        const idHabitacion = e.target.name.split('-')[1];
        self.handleChangeTarifa(idHabitacion, e.target.value);
      });

      // CARGO LOS VALORES DE TARIFAS DE LAS HABITACIONES
      jQuery('.form-control.tarifa').each(function (index) {

        const sele = jQuery('.form-control.tarifa')[index];
        const name = sele.name;
        const idHabitacion = name.split('-')[1];
        const idTarifa = self.model.habitaciones.find(x => x.idHabitacion === Number(idHabitacion)).idTarifa;
        jQuery('#' + name).val('' + idTarifa);
        jQuery('#' + name).trigger('change');
      });
    }
  }

  setAdicionalesFormatoSelect2(adicionales: any[]) {

    // tslint:disable-next-line:prefer-const
    let arregloAdicionales = [];
    adicionales.forEach(adicional => {
      arregloAdicionales.push('' + adicional.idAdicional);
    });
    return arregloAdicionales;
  }

  // PROCESO DE GUARDAR REGISTRO
  guardar(form: NgForm) {

    // SET CARGANDO
    this.loading = true;

    // ASIGNO LA ACCION DEL COMPONENTE
    this.model.accion = this.accion;

    // CAPTURO EL ID DEL PASAJERO
    this.model.pasajero.idPais = jQuery('#pais').val();

    // SI EL ESTADO DEL MODELO ES INDEFINIDO
    // DEFINIMOS COMO RESERVA
    if (!this.model.estado) {
      this.model.estado = 'Re';
    }

    // SI ES MODO TOTAL LE ASIGNAMOS TOTAL AL MODELO
    if (this.esTotal) {
      this.model.total = this.total;
    }

    this.reservaService.mantenimiento(this.model)
      .subscribe(
        response => {

          this.loading = false;

          if (response.success) {

            form.resetForm();
            this.pasajeroRegistrado = false;
            this.paso = 1;

            this.toastService.showSuccess(response.mensaje);
            jQuery('#reservaModal').modal('hide');

            this._success();
          } else {

            this.toastService.showError(response.mensaje);
          }
        },
        error => {

          this.loading = false;
          this.toastService.showError('Ocurrió un error al crear la reserva.');
          console.log(error);
        });
  }

  // CUANDO ES EXITOSO EL GUARDADO
  _success() {
    this.guardarSuccess.next();
  }

  // CUANDO PRESIONA EL BOTON MODIFICAR
  _modificar() {

    this.paso = 1;
    this.modificarTotal = false;

    for (let i = 0; i < this.model.habitaciones.length; i++) {
      this.model.habitaciones[i].modelTarifa = this.tarifas.find(x => x.idTarifa === this.model.habitaciones[i].idTarifa);
    }

    this.modificar.next(this.model);
  }

  // CUANDO CANCELA
  _cerrar() {

    this.paso = 1;
    this.esTotal = false;
    this.modificarTotal = false;
    jQuery('#reservaModal').modal('hide');
    this.cerrar.next();
  }

  // CANCELAR RESREVA INTETN
  _cancelarReserva() {
    this.cancelarReserva.next();
  }

  _cambiarEstado(estado) {

    this.cambiarEstado.next(estado);
  }

  _pagos() {
    this.pagos.next();
  }

  // CUANDO PRECIONA SIGUIENTE
  siguiente() {

    // VALIDAMOS QUE AL MENOS TENGA UNA HABITACION
    if (this.model.habitaciones.length === 0) {
      this.toastService.showWarning('Selecciona al menos una habitación');
      return;
    }

    // vERIFICAMOS QUE TODAS LAS HABITACIONES TENGAN ASIGNADAS TARIFAS
    const index = this.model.habitaciones.findIndex(x => x.idTarifa === undefined);

    if (!this.esTotal && index !== -1) {
      this.toastService.showWarning('Todas las habitaciones deben tener asignada una tarifa.');
      return;
    }

    // VALIDAMOS QUE NO ESTE MODIFICANDO
    if (this.modificarTotal) {
      this.toastService.showWarning('Termina de modificar el total de la reserva');
      return;
    }

    // HAY QUE VERIFCAR QUE NO SE ESTE MODIFICACNDO ADICIONALES

    this.paso = 2;
  }

  // CUANDO DAMOS ATRAS
  atras() {
    this.paso = 1;
  }

  // SUMA TOTAL DE RESERVA SIEMPRE QUE esTotal = false
  getTotal() {

    if (!this.model.habitaciones || this.model.habitaciones.length === 0) {
      return 0;
    }

    const habitaciones = this.model.habitaciones;
    const adicionales = this.model.adicionales || [];

    let sum = 0;
    // SUMO TOTAL DE TARIFA DE HABITACION POR EL NUMERO DE NOCHES
    habitaciones.forEach(habitacion => {
      sum = sum + (this.nightDiff(habitacion.feDesde, habitacion.feHasta) * habitacion.tarifa);
    });

    // SUMO EL TOTAL DE LA TARIFA DEL ADICIONAL POR LA CANTIDAD
    adicionales.forEach(adicional => {
      sum = sum + (adicional.tarifa * adicional.cantidad);
    });

    this.model.total = sum;
    return this.model.total;
  }

  handleChangeAdicional(idAdicionales = []): void {

    this.model.adicionales = [];

    // RECORRO TODOS LOS IDS QUE VIENEN DEL SELECT 2
    // PARA BUSCAR EL OBJETO ADICIONAL CON SUS DATOS
    // Y ASIGNARLO A EL ARREGLO DE ADICIONALES DEL MODELO
    for (let i = 0; i < idAdicionales.length; i++) {

      const index = this.adicionales.findIndex(x => x.idAdicional === Number(idAdicionales[i]));
      this.adicionales[index].cantidad = 1;
      this.model.adicionales.push(this.adicionales[index]);
    }
  }

  private nightDiff(feDesde: Date, feHasta: Date) {

    return this.reservaService.getNumeroNoches(feDesde, feHasta);
  }

  // PARECE QUE NO SIRVE
  // lockIdent() {

  //   this.model.ident = !this.model.ident;

  //   if (!this.model.ident) {
  //     this.esPass = false;
  //     this.model.pasajero.identificacion = '';
  //   } else {
  //     this.esPass = true;
  //   }
  // }

  intentModificarPasajero() {

    this.modificarPasajero = true;
    this.pasajeroOld = Object.assign({}, this.model.pasajero);
  }

  guardarPasajero() {

    this.modificarPasajero = false;
    this.loadingPasajero = true;
    this.model.pasajero.accion = 'U';
    this.model.pasajero.idPais = jQuery('#pais').val();

    this.pasajeroService.mantenimiento(this.model.pasajero)
      .subscribe(
        response => {

          this.loadingPasajero = false;

          if (response.success) {
            this.toastService.showSuccess(response.mensaje);
          } else {
            this.toastService.showError(response.mensaje);
          }
        },
        error => {

          this.loadingPasajero = false;
          this.toastService.showError('Hubo un error al actualizar el pasajero');
          console.log(error);
        });
  }

  cancelIntentModificarPasajero() {

    this.modificarPasajero = false;
    this.model.pasajero = Object.assign({}, this.pasajeroOld);
  }

  getPasajero() {

    this.loadingPasajero = true;
    const correo = this.model.pasajero.correo;

    this.pasajeroService.getById(correo)
      .subscribe(response => {

        if (response.success) {

          this.loadingPasajero = false;

          if (response.data.length === 0) {

            this.pasajeroRegistrado = false;
            this.model.pasajero = {};
            this.model.pasajero.correo = correo;
            // this.model.pasajero.ident = true;
          } else
            if (response.data.length > 0) {

              this.pasajeroRegistrado = true;
              this.model.pasajero = response.data[0];
              this.model.pasajero.valuePa = this.model.pasajero.idPais;
              jQuery('#pais').val('' + this.model.pasajero.idPais);
              // this.model.pasajero.ident = true;
            }
        } else {
          this.toastService.showError(response.mensaje);
        }
      },
        error => {

          this.loadingPasajero = false;
          this.toastService.showError('Hubo un error al actualizar el pasajero');
          console.log(error);
        });

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

        if (this.model.habitaciones && this.model.habitaciones[0].feDesde.getTime()
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

        if (this.model.estado === 'Ci') {
          return false;
        }

        return true;
    }
  }

  // PARA MANEJAR EL CAMBIO A PROFORMA O
  // RESERVA
  handleChangeReservaProforma(estado) {
    this.model.estado = estado;
  }

  handleChangeTarifa(idHabitacion, idTarifa) {

    // SE BUSCA LA HABITACION Y LA TARIFA PARA ASIGNAR VALORES Y SE PONE EN MODO
    // esTotal = false
    const habitacion = this.model.habitaciones.find(x => x.idHabitacion === Number(idHabitacion));
    habitacion.tarifa = this.tarifas.find(x => x.idTarifa === Number(idTarifa)).valor;
    habitacion.idTarifa = Number(idTarifa);
    this.esTotal = false;
  }

  modiTotal(opcion) {
    if (opcion === '!total') {
      this.total = this.model.total;
    }
    this.modificarTotal = true;
    this.totalOld = this.total;
  }

  goModiTotal() {
    this.esTotal = true;
    this.modificarTotal = false;
    for (let i = 0; i < this.model.habitaciones.length; i++) {
      this.model.habitaciones[i].idTarifa = undefined;
      this.model.habitaciones[i].tarifa = 0;
    }
  }

  cancelModiTotal() {
    if (this.esTotal) {
      this.total = this.totalOld;
    }
    this.modificarTotal = false;
  }

  modiTarifaAdicional(adi: any) {

    this.auxAdicional = Object.assign({}, adi);
  }

  goModiTarifaAdicional() {

    this.auxAdicional = { idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0 };
  }

  cancelTarifaAdicional(adi: any) {

    const index = this.model.adicionales.findIndex(x => x.idAdicional === adi.idAdicional);

    this.model.adicionales[index] = Object.assign({}, this.auxAdicional);
    this.auxAdicional = { idAdicional: 0, adicional: '', tarifa: 0, cantidad: 0 };
  }

  delReserve(_room) {

    if (this.model.habitaciones.length === 1) {

      this.toastService.showWarning('La reserva debe tener al menos una habitación.');
      return;
    } else {

      const index = this.model.habitaciones.findIndex(x => x.idHabitacion === _room.idHabitacion);

      if (index !== -1) {
        this.model.habitaciones.splice(index, 1);
      }
    }
  }

  setAdicionalesFormat() {

    for (let i = 0; i < this.adicionales.length; i++) {
      this.adicionalesFormat.push({ id: '' + this.adicionales[i].idAdicional, text: this.adicionales[i].adicional });
    }
  }

  setPaisesFormat() {

    for (let i = 0; i < this.paises.length; i++) {
      this.paisesFormat.push({ id: '' + this.paises[i].idPais, text: this.paises[i].pais });
    }
  }

}