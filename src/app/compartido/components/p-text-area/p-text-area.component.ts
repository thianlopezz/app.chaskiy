import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p-text-area',
  templateUrl: './p-text-area.component.html',
  styleUrls: ['./p-text-area.component.css']
})
export class PTextAreaComponent implements OnInit {
  @Input() text: any = '';
  @Input() _inputName = '';

  @Output() modificar = new EventEmitter<any>();

  esModificar;
  oldValue;

  constructor() {}

  ngOnInit() {}

  desbloquea() {
    this.esModificar = true;
    this.oldValue = this.text;
  }

  cancelar() {
    this.text = this.oldValue;
    this.esModificar = false;
  }

  _modificar() {
    this.esModificar = false;
    this.modificar.next(this.text);
  }
}
