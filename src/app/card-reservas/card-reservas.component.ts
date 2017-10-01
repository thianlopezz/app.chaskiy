import { Component, OnInit, Input } from '@angular/core';
import { ReserveService, AcceptService } from '../_services/index';

@Component({
  selector: 'card-reservas',
  templateUrl: './card-reservas.component.html',
  styleUrls: ['./card-reservas.component.css']
})
export class CardReservasComponent implements OnInit {

  @Input() reservas: any[];

  toDay: Date;

  constructor(private reserveService: ReserveService,
              private acceptService:AcceptService) { }

  ngOnInit() {

    let now = new Date();

    let dia = now.getDate();
    let mes = now.getMonth();
    let anio = now.getFullYear();

    this.toDay = new Date(anio, mes, dia, 0, 0, 0, 0);
  }

  nightDiff(reserva: any) {

    return this.reserveService.getNights(new Date(reserva.feDesde), new Date(reserva.feHasta));
  }

  addDay(_feHasta: string) {

    return new Date(new Date(_feHasta).getTime() + (1000 * 60 * 60 * 24));
  }

  getEstado(reserva: any){

      return this.reserveService.getEstado(reserva);
  }

  getEstadoStyle(reserva: any){

      if(reserva.estado == 'Ca')
          return {'badge-dark': true};
      else
        if(reserva.estado == 'Ci')
          return {'badge-danger': true};
        else
          if(reserva.estado == 'Co')
            return {'badge-warning': true};
          else
            if(reserva.estado == 'Re')
              return {'badge-info': true};
            else
              if(reserva.estado == 'Pr')
                return {'badge-light': true};
  }

  ocultaBtnModi(op: string, reserva: any){

    switch(op){

      case 'Ci':

        if(reserva.estado == 'Co')
          return false;

        if(reserva.estado == 'Ci')
          return false;

        if(new Date(reserva.feDesde).getTime()
            == this.toDay.getTime())
          return true;

        return false;
      case 'Co':
        if(reserva.estado == 'Ci')
          return true;

        return false;
    }
  }

  go(a_estado: string, reserva: any){

    reserva.a_estado = a_estado;
    let retorno = { model: reserva};

    this.selectedVal(retorno);
  }

  selectedVal(resp) {
    this.acceptService.emitAcceptChangeEvent(resp);
  }

}
