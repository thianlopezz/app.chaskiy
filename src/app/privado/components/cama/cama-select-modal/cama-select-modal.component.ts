import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cama-select-modal',
  templateUrl: './cama-select-modal.component.html',
  styleUrls: ['./cama-select-modal.component.css']
})
export class CamaSelectModalComponent implements OnInit {
  @Input() _camas = [];
  @Input() _loading;

  @Input('model') model: any = {};

  @Output() _addCama = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addCama(cama) {
    this._addCama.next(cama);
  }
}
