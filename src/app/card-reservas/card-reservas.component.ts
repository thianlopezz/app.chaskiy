import { Component, OnInit, Input } from '@angular/core';
import { ReserveService } from '../_services/index';

@Component({
  selector: 'card-reservas',
  templateUrl: './card-reservas.component.html',
  styleUrls: ['./card-reservas.component.css']
})
export class CardReservasComponent implements OnInit {

  @Input() reservas: any[];

  constructor(private reserveService: ReserveService) { }

  ngOnInit() {
  }

  nightDiff(reserva: any) {

    debugger;

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

}
