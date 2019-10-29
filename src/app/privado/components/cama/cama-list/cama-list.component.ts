import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cama-list',
  templateUrl: './cama-list.component.html',
  styleUrls: ['./cama-list.component.css']
})
export class CamaListComponent implements OnInit {
  @Input() _camas: any = [];

  @Output() _agregar = new EventEmitter();
  @Output() _addCama = new EventEmitter();
  @Output() _deleteCama = new EventEmitter();

  showAgregar;

  showAddCama;
  showDeleteCama;

  constructor() {}

  ngOnInit() {
    this.showAgregar = this._agregar.observers.length > 0;
    this.showAddCama = this._addCama.observers.length > 0;
    this.showDeleteCama = this._deleteCama.observers.length > 0;
  }

  agregar() {
    this._agregar.next();
  }

  addCama(cama) {
    this._addCama.next(cama);
  }

  deleteCama(cama) {
    this._deleteCama.next(cama);
  }
}
