import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertService, AuthenticationService, RegisterService,
          MessageService} from '../_services/index';

declare var jQuery:any;

@Component({
  selector: 'app-recupera-pass',
  templateUrl: './recupera-pass.component.html',
  styleUrls: ['./recupera-pass.component.css']
})
export class RecuperaPassComponent implements OnInit {

  model: any = {};

  valid_pass = false;
  valid_pass0 = false;
  valid_correo = false;

  loading = false;
  loading0 = false;

  constructor(
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private registerService: RegisterService,
      private messService: MessageService) { }

  ngOnInit() {
  }



  recupera(form: NgForm){

    this.loading = true;
    this.loading0 = true;

    var mensaje = "";
    var mensaje_err = "";

    // switch (this.accion){
    //   case 'I':
    //     mensaje = 'Reserva creada con éxito';
    //     mensaje_err = 'Ocurrió un error al crear la reserva';
    //   break;
    //   case 'U':
    //     mensaje = 'Reserva modificada con éxito';
    //     mensaje_err = 'Ocurrió un error al modificar la reserva';
    //   break;
    // }

    this.registerService.enviaRecupera(this.model)
        .subscribe(
            data => {

                if(data.success){

                  this.loading = false;

                  this.messService.success('Se envió a tu correo las instrucciones para la recuperación de tu contraseña, no olvides de revisar tambien la bandeja de correos no deseados');
                  this.showMess();
                }
                else{

                  this.loading = false;
                  this.loading0 = false;
                  this.messService.error(data.mensaje);
                  this.showMess();
                }
            },
            error => {

                console.log(error);
                this.loading = false;
                this.loading0 = false;

                this.messService.error(mensaje_err);
                this.showMess();
            });
  }

  private showMess(){

      setTimeout(() => {

        jQuery("#messModal").modal("show");
      }, 200);
  }

}
