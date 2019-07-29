import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-especificacion-card',
  templateUrl: './especificacion-card.component.html',
  styleUrls: ['./especificacion-card.component.css']
})
export class EspecificacionCardComponent implements OnInit {
  @Input() _especificacion: any = {};

  @Output() _agregar = new EventEmitter<any>();
  @Output() _quitar = new EventEmitter<any>();

  showAgregar;
  showQuitar;

  constructor() {}

  ngOnInit() {
    this.showAgregar = this._agregar.observers.length > 0;
    this.showQuitar = this._quitar.observers.length > 0;
  }

  agregar() {
    this._agregar.next(this._especificacion);
  }

  quitar() {
    debugger;
    this._quitar.next(this._especificacion);
  }
}
