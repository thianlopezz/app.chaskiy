import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../../publico/registro/registro.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
declare var jQuery: any;
// TODO: poner toastr en vez de modal
@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent implements OnInit {
  model: any = {};
  valid_pass;
  valid_pass0;

  loading;

  constructor(
    private router: Router,
    private registerService: RegistroService,
    private mensajeService: MensajeService
  ) {}

  ngOnInit() {}

  guardar(form: NgForm) {
    if (this.model.password !== this.model.password0) {
      this.valid_pass = true;
      return;
    }

    if (this.model.password.length < 6) {
      this.valid_pass0 = true;
      return;
    }

    this.valid_pass = false;
    this.valid_pass0 = false;

    this.loading = true;

    this.registerService.password(this.model).subscribe(
      (data: any) => {
        if (data.success) {
          this.loading = false;
          this.mensajeService.success(data.mensaje);
          this.showMess();

          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 900);
        } else {
          this.loading = false;
          this.mensajeService.error(data.mensaje);
          this.showMess();
        }
      },
      error => {
        console.log(error);
        this.loading = false;

        this.mensajeService.error(error);
        this.showMess();
      }
    );
  }

  private showMess() {
    setTimeout(() => {
      jQuery('#messModal').modal('show');
    }, 200);
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
}
