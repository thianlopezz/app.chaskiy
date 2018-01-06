import { Component, OnInit, Input } from '@angular/core';
import { ConfirmacionEventService } from '../../../compartido/components/modal-confirmacion/confirmacion-event.service';

@Component({
  selector: 'app-modal-estados',
  templateUrl: './modal-estados.component.html',
  styleUrls: ['./modal-estados.component.css']
})
export class ModalEstadosComponent implements OnInit {

  @Input() model: any;

  tipo_desc: string;
  mensaje_desc: string;

  constructor(private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {

  }

  go() {

    const retorno = { modo: this.model.a_estado, model: this.model};

    this.selectedVal(retorno);
  }

  selectedVal(resp) {
    this.confirmacionEventService.emitAcceptChangeEvent(resp);
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

}
