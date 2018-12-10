import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ReservaService } from '../../reserva.service';
import { ToastService } from '../../../../compartido/services/toast.service';
import * as moment from 'moment';

declare var jQuery: any;

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent implements OnInit, OnChanges {

  @Input() model: any = {};

  @Output() success = new EventEmitter<any>();
  @Output() cancelarReserva = new EventEmitter<any>();
  @Output() cerrar = new EventEmitter<any>();
  @Output() modificar = new EventEmitter<any>();

  @Output() cambiarEstado = new EventEmitter<any>();
  @Output() pagos = new EventEmitter<any>();

  loading;

  paso;

  total;
  esTotal;

  mensajeConfirmacion;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {
    this.paso = 1;
  }

  ngOnChanges() {

    this.paso = 1;

    if (this.model && this.model.habitaciones && this.model.habitaciones[0].tarifaDetalle === '-') {
      this.esTotal = true;
      this.total = this.model.total;
    }
  }

  confirmar() {

    jQuery('#confirmaModal').modal('hide');
    setTimeout(() => {
      jQuery('#estadosModal').modal('show');
    }, 10);
  }

  _success() {
    this.success.next();
  }

  _pagos() {
    this.pagos.next();
  }

  _cambiarEstado(estado) {
    this.cambiarEstado.next(estado);
  }

  // cambiaEstado(check?: string) {

  //   this.loading = true;

  //   this.model.accion = 'Es';

  //   let mensaje = '';
  //   let mensaje_err = '';

  //   if (!check) {

  //     check = this.model.a_estado;
  //   }

  //   switch (check) {
  //     case 'Ci':
  //       mensaje = 'Check-in éxitoso';
  //       mensaje_err = 'Ocurrió un error en el check in';
  //       break;
  //     case 'Co':
  //       mensaje = 'Check-out éxitoso';
  //       mensaje_err = 'Ocurrió un error en el check-out';
  //       break;
  //     case 'Re':
  //       mensaje = 'Reserva confirmada con exito';
  //       mensaje_err = 'Ocurrió un error al confirmar la reserva';
  //       break;
  //     case 'Ca':
  //       mensaje = 'Reserva cancelada con exito';
  //       mensaje_err = 'Ocurrió un error al cancelar la reserva';
  //       break;
  //   }

  //   if (check === 'Co' && (this.model.total - this.model.totalPagado) > 0) {

  //     // jQuery('#estadosModal').modal('hide');

  //     this.toastService.showWarning('No se puede realizar el proceso de check-out debido a que hay un saldo pendiente.');
  //     this.loading = false;
  //     return;
  //   }

  //   this.model.estado = check;

  //   this.reservaService.mantenimiento(this.model)
  //     .subscribe(
  //       data => {

  //         if (data.success) {

  //           jQuery('#estadosModal').modal('hide');

  //           this.loading = false;
  //           jQuery('#reservaModal').modal('hide');
  //           this.toastService.showSuccess(mensaje);
  //         } else {

  //           jQuery('#estadosModal').modal('hide');

  //           this.loading = false;
  //           this.toastService.showError(data.mensaje);
  //         }
  //       },
  //       error => {

  //         jQuery('#estadosModal').modal('hide');

  //         console.log(error);
  //         this.loading = false;
  //         this.toastService.showError(mensaje_err);
  //       });
  // }

  setCancelar() {

    this.cancelarReserva.next({});
    // this.model.a_estado = 'Ca';
    // this.model = Object.assign({}, this.model);
    // this.mensajeConfirmacion = '¿Está seguro de cancelar la reserva?';
  }

  ocultaBtn(op: string) {

    switch (op) {

      case 'Ci':

        if (this.model.estado === 'Co') {
          return false;
        }

        if (this.model.estado === 'Ci') {
          return false;
        }

        let bandera = false;

        // CUANDO YA PASO EL DIA DE LLEGADA O DESPUES
        if (this.model.habitaciones) {

          this.model.habitaciones.forEach(habitacion => {

            if (moment().isSame(moment(habitacion.feDesde.getTime())) ||
              moment().isAfter(moment(habitacion.feDesde.getTime()))) {
              bandera = true;
            }
          });
        }

        return bandera;
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

        if (this.model.estado === 'Ci' || this.model.estado === 'Co') {
          return false;
        }

        return true;
    }
  }

  nightDiff(feDesde: Date, feHasta: Date) {

    return this.reservaService.getNumeroNoches(feDesde, feHasta);
  }

  // FIXME: REVISAR SI ES PRUDENTE QUE VAYA
  getTotal() {

    if (!this.model.habitaciones || this.model.habitaciones.length === 0) {

      return 0;
    }

    const habitaciones = this.model.habitaciones;
    const adicionales = this.model.adicionales || [];

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

  getEstado() {

    return this.reservaService.getEstado(this.model);
  }

  _modificar() {

    this.modificar.next();
  }

  _cerrar() {
    this.cerrar.next();
  }

  atras() {
    this.paso = 1;
  }

  siguiente() {
    this.paso = 2;
  }

  // _cancelarReserva() {
  //   this.cancelarReserva.next();
  // }

}
