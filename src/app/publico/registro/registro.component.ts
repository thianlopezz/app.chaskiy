import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng2-select2';
import { PaisService } from '../../privado/services/pais.service';
import { RegistroService } from './registro.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
declare var jQuery: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
    model: any = {};
    loading = false;

    paises: Array<Select2OptionData>;
    valuePa: string;

    valid_pass;
    valid_pass0;
    valid_correo;

    goCorreo = false;

    constructor(
        private router: Router,
        private paisService: PaisService,
        private registroService: RegistroService,
        private mensajeService: MensajeService) { }

    ngOnInit() {

      this.setSelect2Paises();
    }

    guardar(form: NgForm) {

      if (this.model.password !== this.model.password0) {

        this.valid_pass = true;
        return;
      }

      if (this.model.password.length < 6) {

        this.valid_pass0 = true;
        return;
      }

      if (this.valid_correo === true) {
        return;
      }

      this.valid_pass = false;
      this.valid_pass0 = false;

      this.loading = true;

      this.model.valuePa = this.valuePa;

      // var mensaje = "";
      const mensaje_err = '';

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

      this.registroService.registro(this.model)
          .subscribe(
              data => {

                  if (data.success) {

                    this.router.navigate(['/generico'], { queryParams: { op: 'RS' } });
                  } else {

                    this.loading = false;
                    this.mensajeService.error(data.mensaje);
                    this.showMess();
                  }
              },
              error => {

                  console.log(error);
                  this.loading = false;

                  this.mensajeService.error(mensaje_err);
                  this.showMess();
              });
    }

    getUser() {

      this.goCorreo = true;

      this.registroService.isRegister(this.model)
          .subscribe(
              data => {

                  if (data.success) {

                    this.valid_correo = false;
                  } else {

                    this.valid_correo = true;
                  }

                  this.goCorreo = false;
              },
              error => {

                  this.goCorreo = false;
                  console.log(error);
              });
    }

    valuechange_pass(newVal) {

      if (this.model.password !== this.model.password0) {
        this.valid_pass = true;
      } else {

        this.valid_pass = false;

        if (this.model.password.length < 6) {
          this.valid_pass0 = true;
        } else {

          this.valid_pass0 = false;
        }

      }

    }

    private showMess() {

        setTimeout(() => {

          jQuery('#messModal').modal('show');
        }, 200);
    }

    private setSelect2Paises() {

      this.paisService.getAll().subscribe(
        paises => {

          if (paises.success) {

            this.paises = new Array<Select2OptionData>();

            for (let i = 0; i < paises.data.length; i++) {

              this.paises.push({id: '' + paises.data[i].idPais, text: paises.data[i].pais});
            }

            this.defaultPa();
          } else {

            console.log('Error>> loadAllFormaPagos>> ' + paises.mensaje);
          }
        });
    }

    private defaultPa() {

      if (this.paises.length > 0) {

        this.valuePa = this.paises[0].id;
        this.model.valuePa = this.valuePa;
      }
    }

    changedPa(e: any): void {

        this.model.valuePa = e.value;
      }
}

