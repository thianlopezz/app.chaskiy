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
  @Input() aerolineas = [];
  @Input() fuentes = [];

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

  constructor(private reservaService: ReservaService, private toastService: ToastService) {}

  ngOnInit() {
    this.paso = 1;
  }

  ngOnChanges() {
    this.paso = 1;
    if (this.model && this.model.habitaciones && this.model.habitaciones[0].tarifaDetalle === '-') {
      this.esTotal = true;
      this.total = this.model.total;
    }

    // MAPEAR {value:, text} catalogos
    if (this.aerolineas && !this.aerolineas[0].text && !this.aerolineas[0].value) {
      this.aerolineas = this.aerolineas.map(aerolinea => {
        return { value: aerolinea.idAerolinea, text: aerolinea.aerolinea };
      });
    }
    if (this.fuentes && !this.fuentes[0].text && !this.fuentes[0].value) {
      this.fuentes = this.fuentes.map(fuente => {
        return { value: fuente.idFuente, text: fuente.fuente };
      });
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
            if (
              moment().isSame(moment(habitacion.feDesde.getTime())) ||
              moment().isAfter(moment(habitacion.feDesde.getTime()))
            ) {
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
      sum = sum + this.nightDiff(habitaciones[i].feDesde, habitaciones[i].feHasta) * habitaciones[i].tarifa;
    }

    for (let i = 0; i < adicionales.length; i++) {
      sum = sum + adicionales[i].tarifa * adicionales[i].cantidad;
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

  modificarAerolinea(idAerolinea) {
    this.modificarCamposIndividuales({
      idReserva: this.model.idReserva,
      idAerolinea
    });
  }

  modificarFuente(idFuente) {
    this.modificarCamposIndividuales({
      idReserva: this.model.idReserva,
      idFuente
    });
  }

  modificarNotas(notas) {
    this.modificarCamposIndividuales({
      idReserva: this.model.idReserva,
      notas
    });
  }

  modificarCamposIndividuales(reserva) {
    this.reservaService.modificarCamposIndividuales(reserva).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
        } else {
          this.toastService.showError(data.mensaje);
        }
      },
      error => {
        this.toastService.showError('Ocurrió un error, inténtalo más tarde.');
        console.log(error);
      }
    );
  }

  showNotasModal() {
    jQuery('#reservaModal').modal('hide');
    jQuery('#notasModal').modal('show');
  }
}
