import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services/index';

@Component({
  selector: 'message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {

	message: any;

	constructor(private messService: MessageService) { }

	ngOnInit() {

		this.messService.getMessage().subscribe(message => { this.message = message; });
	}
}
