import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-notas',
  templateUrl: './modal-notas.component.html',
  styleUrls: ['./modal-notas.component.css']
})
export class ModalNotasComponent implements OnInit {
  @Input() notas: any[] = [];
  @Output() _closeModal = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  closeModal() {
    this._closeModal.next();
  }
}
