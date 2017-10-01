import { Component, OnInit, Input } from '@angular/core';
import { AcceptService } from '../_services/index';

@Component({
  selector: 'detalle-estados',
  templateUrl: './detalle-estados.component.html',
  styleUrls: ['./detalle-estados.component.css']
})
export class DetalleEstadosComponent implements OnInit {

  @Input() model: any;

  tipo_desc: string;
  mensaje_desc: string;

  constructor(private acceptService:AcceptService) { }

  ngOnInit() {

  }

  go(){

    let retorno = { modo: this.model.a_estado, model: this.model};

    this.selectedVal(retorno);
  }

  selectedVal(resp) {
    this.acceptService.emitAcceptChangeEvent(resp);
  }

  getTipoDesc(){

    switch(this.model.a_estado){

        case 'Ca':

        return "Cancelación";
        case 'Ci':

        return "Check-in";
        case 'Co':

        return "Check-out";
      }
  }

  getDescripcion(){

    switch(this.model.a_estado){

      case 'Ca':

      return "Motivo de la cancelación";
      case 'Ci':

      return "Observaciones";
      case 'Co':

      return "Observaciones";
    }

  }

}
