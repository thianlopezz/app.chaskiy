import { Component, OnInit, Input } from '@angular/core';
import { ReservaService } from '../../reserva/reserva.service';
import { ConfirmacionEventService } from '../../../compartido/components/modal-confirmacion/confirmacion-event.service';

@Component({
  selector: 'app-card-reserva',
  templateUrl: './card-reserva.component.html',
  styleUrls: ['./card-reserva.component.css']
})
export class CardReservaComponent implements OnInit {

  @Input() reservas: any[];

  toDay: Date;

  constructor(private reservaService: ReservaService,
    private confirmacionEventSerivce: ConfirmacionEventService) { }

  ngOnInit() {

    const now = new Date();

    const dia = now.getDate();
    const mes = now.getMonth();
    const anio = now.getFullYear();

    this.toDay = new Date(anio, mes, dia, 0, 0, 0, 0);
  }

  nightDiff(reserva: any) {

    return this.reservaService.getNumeroNoches(new Date(reserva.fedesde), new Date(reserva.fehasta));
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

        if (reserva.estado === 'Co' || reserva.estado === 'Pr') {
          return false;
        }

        if (reserva.estado === 'Ci') {
          return false;
        }

        if (new Date(reserva.fedesde).getTime()
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

  go(a_estado: string, reserva: any) {

    reserva.a_estado = a_estado;
    const retorno = { model: reserva };

    this.selectedVal(retorno);
  }

  selectedVal(resp) {
    this.confirmacionEventSerivce.emitAcceptChangeEvent(resp);
  }

}
