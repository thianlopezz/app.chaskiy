import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-especificacion-select-modal',
  templateUrl: './especificacion-select-modal.component.html',
  styleUrls: ['./especificacion-select-modal.component.css']
})
export class EspecificacionSelectModalComponent implements OnInit {
  @Input() _especificaciones = [];
  @Input() _loading;

  @Output() _addEspecificacion = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addEspecificacion(especificacion) {
    this._addEspecificacion.next(especificacion);
  }
}
