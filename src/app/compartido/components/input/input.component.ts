import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() _change = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  change(e) {
    e.target.value;
  }
}
