import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../../../compartido/services/toast.service';
import { ReservaService } from '../../reserva/reserva.service';

import * as moment from 'moment';
import { NgForm } from '../../../../../node_modules/@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-modal-estados',
  templateUrl: './modal-estados.component.html',
  styleUrls: ['./modal-estados.component.css']
})
export class ModalEstadosComponent implements OnInit {
  @Input() model: any;

  @Output() success = new EventEmitter<any>();
  @Output() cancelaEstados = new EventEmitter<any>();

  loading;

  // tipo_desc: string;
  // mensaje_desc: string;

  constructor(private reservaService: ReservaService, private toastService: ToastService) {}

  ngOnInit() {}

  cambiaEstado(f: NgForm) {
    this.loading = true;

    let mensaje = '';
    let mensaje_err = '';

    switch (this.model.estado) {
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

    let feHasta;
    let esMismoDia = 1;

    // SI FECHA DE HOY ES MAYOR A RESERVADA
    // DEBO ENVIAR LA FECHA MAS ALTA DE LA RESERVA
    // CASO CONTRARIO DEBO ENVIAR FECHA DE HOY
    if (this.model.habitaciones) {
      let habitacionFechaMayor;

      if (this.model.TIPO === 'HOME') {
        feHasta = moment(this.model.fehasta);
      } else {
        this.model.habitaciones.forEach(habitacion => {
          if (!habitacionFechaMayor) {
            habitacionFechaMayor = habitacion;
          } else {
            if (moment(habitacion.feHasta.getTime()) > moment(habitacionFechaMayor.feHasta.getTime())) {
              habitacionFechaMayor = habitacion;
            }
          }
        });

        if (moment() > moment(habitacionFechaMayor.feHasta.getTime())) {
          feHasta = moment(habitacionFechaMayor.feHasta.getTime());
        } else {
          esMismoDia = 0;
          feHasta = moment().subtract(1, 'days');
        }
      }
    }

    const reserva = {
      accion: 'Es',
      estado: this.model.a_estado,
      idReserva: this.model.idReserva,
      detalleEstado: this.model.observacion,
      feHasta: feHasta.format('YYYY-MM-DD'),
      esMismoDia
    };

    this.reservaService.cambiaEstado(reserva).subscribe(
      response => {
        this.loading = false;
        f.resetForm();

        if (response.success) {
          this.success.next('');
          this.toastService.showSuccess(mensaje);
          jQuery('#estadosModal').modal('hide');
        } else {
          this.toastService.showError(response.mensaje);
        }
      },
      error => {
        console.log(error);
        this.loading = false;
        this.toastService.showError(mensaje_err);
      }
    );
  }

  getTipoDesc() {
    switch (this.model.a_estado) {
      case 'Ca':
        return 'Cancelación';
      case 'Ci':
        return 'Check-in';
      case 'Co':
        return 'Check-out';
    }
  }

  getDescripcion() {
    switch (this.model.a_estado) {
      case 'Ca':
        return 'Motivo de la cancelación';
      case 'Ci':
        return 'Observaciones';
      case 'Co':
        return 'Observaciones';
    }
  }

  _cancelaEstados() {
    this.cancelaEstados.next();
  }
}
