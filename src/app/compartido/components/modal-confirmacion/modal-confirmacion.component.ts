import { Component, OnInit } from '@angular/core';
import { ConfirmacionService } from './confirmacion.service';
import { ConfirmacionEventService } from './confirmacion-event.service';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {
  message: any;

  constructor(private confirmacionService: ConfirmacionService,
              private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {
    this.confirmacionService.getMessage().subscribe(message => { this.message = message; });
  }

  selectedVal(resp) {
    this.confirmacionEventService.emitAcceptChangeEvent(resp);
  }

}
