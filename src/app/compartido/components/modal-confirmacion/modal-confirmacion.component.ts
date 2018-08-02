import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  @Input() mensaje;

  @Output() confirmar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  _confirmar() {
    this.confirmar.next();
  }

  _cancelar() {
    this.cancelar.next();
  }

}
