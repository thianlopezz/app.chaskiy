import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-especificacion-list',
  templateUrl: './especificacion-list.component.html',
  styleUrls: ['./especificacion-list.component.css']
})
export class EspecificacionListComponent implements OnInit {
  @Input() _especificaciones: any = [];

  @Output() _agregar = new EventEmitter();
  @Output() _addEspecificacion = new EventEmitter();
  @Output() _deleteEspecificacion = new EventEmitter();

  showAgregar;

  showAddEspecificacion;
  showDeleteEspecificacion;

  constructor() {}

  ngOnInit() {
    this.showAgregar = this._agregar.observers.length > 0;
    this.showAddEspecificacion = this._addEspecificacion.observers.length > 0;
    this.showDeleteEspecificacion = this._deleteEspecificacion.observers.length > 0;
  }

  agregar() {
    this._agregar.next();
  }

  addEspecificacion(especificacion) {
    this._addEspecificacion.next(especificacion);
  }

  deleteEspecificacion(especificacion) {
    this._deleteEspecificacion.next(especificacion);
  }
}
