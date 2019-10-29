import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cama-card',
  templateUrl: './cama-card.component.html',
  styleUrls: ['./cama-card.component.css']
})
export class CamaCardComponent implements OnInit {
  @Input() _cama: any = {};

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
    this._agregar.next(this._cama);
  }

  quitar() {
    this._quitar.next(this._cama);
  }
}
