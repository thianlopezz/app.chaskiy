import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  images = [];

  constructor() {}

  ngOnInit() {}

  showModal() {
    jQuery('#subirModal').modal('show');
  }
}
