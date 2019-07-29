import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.css']
})
export class ImageSelectorComponent implements OnInit {
  @Input() _images: any = [];

  @Output() _cancel = new EventEmitter<any>();
  @Output() _select = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  cancel() {
    this._cancel.next();
  }

  select(idFoto) {
    this._select.next(idFoto);
  }
}
