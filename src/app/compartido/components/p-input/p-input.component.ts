import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-p-input',
  templateUrl: './p-input.component.html',
  styleUrls: ['./p-input.component.css']
})
export class PInputComponent implements OnInit {
  @Input() text: any = '';
  @Input() value: any;
  @Input() _inputName = '';

  @Input() _type;

  @Output() modificar = new EventEmitter<any>();

  esModificar;
  oldValue;

  constructor() {}

  ngOnInit() {}

  desbloquea() {
    this.esModificar = true;
    this.oldValue = this.value;
  }

  cancelar() {
    this.value = this.oldValue;
    this.esModificar = false;
  }

  _modificar() {
    this.esModificar = false;
    this.modificar.next(this.value);
  }
}
