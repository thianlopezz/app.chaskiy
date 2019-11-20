import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() _idModal;
  @Input() _idForm;
  @Input() _title;
  @Input() _type;
  @Input() _loading;

  @Input() _cancelarText;
  @Input() _aceptarText;

  @Output() _closeModal = new EventEmitter();
  @Output() _submit = new EventEmitter();

  showClose = false;
  showSubmit = false;

  constructor() {}

  ngOnInit() {
    this.showClose = this._closeModal.observers.length > 0;
    this.showSubmit = this._submit.observers.length > 0;
  }

  closeModal() {
    this._closeModal.next();
  }

  submit() {
    this._submit.next();
  }
}
