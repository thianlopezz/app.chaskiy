import { Component, OnInit } from '@angular/core';

import { ConfirmService, AcceptService } from '../_services/index';

@Component({
	moduleId: module.id,
  	selector: 'confirm',
  	templateUrl: './modal-confirm.component.html',
  	styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {
	message: any;

  constructor(private confirmService: ConfirmService,
  				private acceptService:AcceptService) { }

  ngOnInit() {
  	this.confirmService.getMessage().subscribe(message => { this.message = message; });
  }

  //item = 1;

  selectedVal(resp) {
    this.acceptService.emitAcceptChangeEvent(resp);
  }

}
