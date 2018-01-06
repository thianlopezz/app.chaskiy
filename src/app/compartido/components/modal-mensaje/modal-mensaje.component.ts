import { Component, OnInit } from '@angular/core';
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.css']
})
export class ModalMensajeComponent implements OnInit {
 message: any;

 constructor(private messService: MensajeService) { }

 ngOnInit() {
 this.messService.getMessage()
 .subscribe(message => { this.message = message; });
 }
}
