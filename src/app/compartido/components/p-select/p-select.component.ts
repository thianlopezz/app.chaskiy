import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-p-select',
  templateUrl: './p-select.component.html',
  styleUrls: ['./p-select.component.css']
})
export class PSelectComponent implements OnInit, OnChanges {
  @Input() text: any = '';
  @Input() value: number;
  @Input() catalog = [];

  @Output() modificar = new EventEmitter<any>();

  esModificar;
  oldValue;

  constructor() {}

  ngOnChanges() {}

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
    this.text = this.catalog.find(x => x.value === Number(this.value)).text;
    this.modificar.next(this.value);
  }
}
