import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReservaService } from '../../reserva/reserva.service';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.css']
})
export class CardReservaComponent implements OnInit {

  @Input() reservas: any[];
  @Input() loading = true;

  @Output() cambiarEstado = new EventEmitter<any>();

  toDay: Date;

  constructor(private reservaService: ReservaService) { }

  ngOnInit() {

    const now = new Date();

    const dia = now.getDate();
    const mes = now.getMonth();
    const anio = now.getFullYear();

    this.toDay = new Date(anio, mes, dia, 0, 0, 0, 0);
  }

  nightDiff(reserva: any) {

    return this.reservaService.getNumeroNoches(new Date(reserva.feDesde), new Date(reserva.feHasta));
  }

  addDay(_feHasta: string) {

    return new Date(new Date(_feHasta).getTime() + (1000 * 60 * 60 * 24));
  }

  getEstado(reserva: any) {

    return this.reservaService.getEstado(reserva);
  }

  getEstadoStyle(reserva: any) {

    if (reserva.estado === 'Ca') {
      return { 'badge-dark': true };
    } else if (reserva.estado === 'Ci') {
      return { 'badge-danger': true };
    } else if (reserva.estado === 'Co') {
      return { 'badge-warning': true };
    } else if (reserva.estado === 'Re') {
      return { 'badge-info': true };
    } else if (reserva.estado === 'Pr') {
      return { 'badge-light': true };
    }
  }

  ocultaBtnModi(op: string, reserva: any) {

    switch (op) {

      case 'Ci':

        if (reserva.estado === 'Co') {
          return false;
        }

        if (reserva.estado === 'Ci') {
          return false;
        }

        if (reserva.habitaciones && new Date(reserva.feDesde).getTime()
          === this.toDay.getTime()) {
          return true;
        }

        return false;
      case 'Co':

        if (reserva.estado === 'Ci') {
          return true;
        }

        return false;
    }
  }

  _cambiarEstado(estado, model) {

    model.TIPO = 'HOME';
    const objetoEvent = {
      model,
      estado
    };

    this.cambiarEstado.next(objetoEvent);
  }
}
