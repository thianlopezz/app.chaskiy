import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-p-select2',
  templateUrl: './p-select2.component.html',
  styleUrls: ['./p-select2.component.css']
})
export class PSelect2Component implements OnInit, OnChanges, AfterViewInit {
  @Input() text: any = '';
  @Input() value = [];
  @Input() catalog = [];
  @Input() _inputName = 'pSelect';

  @Output() modificar = new EventEmitter<any>();

  esModificar;
  oldValue;

  constructor() {}

  ngOnChanges() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  desbloquea() {
    this.esModificar = true;
    this.oldValue = this.text;
    setTimeout(() => {
      jQuery('#' + this._inputName).select2();
      jQuery('#' + this._inputName).val(this.value);
      jQuery('#' + this._inputName).trigger('change');

      // jQuery('#' + this._inputName).on('select2:select', e => {
      //   debugger;
      //   this.value = jQuery('#' + this._inputName).val();
      // });
    }, 10);
  }

  cancelar() {
    this.text = this.oldValue;
    this.esModificar = false;
  }

  _modificar() {
    this.esModificar = false;
    this.value = jQuery('#' + this._inputName).val();
    this.text = this.catalog.find(x => this.value.findIndex(val => val == x.value) > -1).text;
    this.modificar.next(this.value);
  }
}
