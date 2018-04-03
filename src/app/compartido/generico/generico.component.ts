import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MensajeService } from '../components/modal-mensaje/mensaje.service';
import { RegistroService } from '../../publico/registro/registro.service';
import { ReservaService } from '../../privado/reserva/reserva.service';
import { SocialService } from '../../privado/services/social.service';

declare var jQuery: any;

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit {

  muestra = false;
  op: string;
  token: string;
  id: number;

  model: any = {};
  loading = false;
  loading0 = false;

  valid_pass;
  valid_pass0;

  redes: any[] = [];

  showReserve= false;
  showMensajeReserva= false;
  mensaje = '';

  constructor(private activatedRoute: ActivatedRoute,
    private registroService: RegistroService,
    private router: Router,
    private mensajeService: MensajeService,
    private reservaService: ReservaService,
    private socialService: SocialService) { }

  ngOnInit() {

    this.activatedRoute
      .queryParams
      .subscribe(params => {

        this.op = params['op'];

        if (this.op === undefined) {

          this.router.navigate(['/']);
          return;
        }

        switch (this.op) {

          case 'AC': /*activa cuenta*/

            this.token = params['token'];

            if (this.token === undefined) {

              this.router.navigate(['/']);
              return;
            }

            this.activaCuenta(this.token);
          break;
          case 'UP':

            this.token = params['token'];
          break;
          case 'RE':

            this.id = params['id'] || params['ID'];
            this.token = params['token'];


            if (this.id === undefined || this.token === undefined) {

              this.router.navigate(['/']);
              return;
            }

            this.model.pass = {};
            this.model.hospedaje = {};

            this.getReserveDet(this.id, this.token);
          break;
        }
      }, error => {

        this.router.navigate(['/']);
      });
  }

  private activaCuenta(token: string) {

    this.registroService.activa(token)
      .subscribe(
      data => {

        if (data.success) {

          this.muestra = true;
        } else {

          this.mensajeService.error(data.mensaje);
          this.showMess();
        }
      },
      error => {

        console.log(error);

        this.mensajeService.error(error);
        this.showMess();
      });
  }

  confirma() {

    this.loading = true;

    this.reservaService.confirmaReserva(this.id)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.mensajeService.success(data.mensaje);
          this.showMess();
          this.getReserveDet(this.id, this.token);
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
      });
  }

  getEstadoStyle(reserva: any) {

    if (reserva.estado === 'Ca') {
      return { 'badge-dark': true };
    } else
      if (reserva.estado === 'Ci') {
        return { 'badge-danger': true };
      } else
        if (reserva.estado === 'Co') {
          return { 'badge-warning': true };
        } else
          if (reserva.estado === 'Re') {
            return { 'badge-info': true };
          } else
            if (reserva.estado === 'Pr') {
              return { 'badge-light': true };
            }
  }

  updatePass(form: NgForm) {

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

    this.model.tokenRecupera = this.token;

    this.registroService.upRecupera(this.model)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;
          this.mensajeService.success(data.mensaje);
          this.showMess();

          setTimeout(() => {

            this.router.navigate(['/login']);
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
      });
  }

  recupera(form: NgForm) {

    this.loading = true;
    this.loading0 = true;

    let mensaje = 'Se envió a tu correo las instrucciones para la recuperación de tu contraseña,';
    mensaje += ' no olvides de revisar tambien la bandeja de correos no deseados';

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

    this.registroService.enviaRecupera(this.model)
      .subscribe(
      data => {

        if (data.success) {

          this.loading = false;

          this.mensajeService.success(mensaje);
          this.showMess();
        } else {

          this.loading = false;
          this.loading0 = false;
          this.mensajeService.error(data.mensaje);
          this.showMess();
        }
      },
      error => {

        console.log(error);
        this.loading = false;
        this.loading0 = false;

        this.mensajeService.error(mensaje_err);
        this.showMess();
      });
  }

  getReserveDet(idreserva: number, token: string) {

    this.reservaService.getByIdEx(idreserva, token).subscribe(
      reservas => {

        if (reservas.success) {

          this.showReserve = true;
          this.showMensajeReserva = false;

          this.model = reservas.data[0];
          this.model.habitaciones = this.setDateHab(this.model.habitaciones);

          this.model.pago = {};
          this.loadSocial();
        } else {

          this.showReserve = false;
          this.showMensajeReserva = true;
          this.mensaje = reservas.mensaje;

          console.log('Error>> getById>> ' + reservas.mensaje);
        }
      });
  }

  getEstado() {

    return this.reservaService.getEstado(this.model);
  }

  getTotal() {

    if (!this.model.habitaciones || this.model.habitaciones.length === 0) {

      return 0;
    }

    const habitaciones = this.model.habitaciones;
    const adicionales = this.model.valueAd || [];

    let sum = 0;
    for (let i = 0; i < habitaciones.length; i++) {

      sum = sum + (this.nightDiff(habitaciones[i].fedesde, habitaciones[i].fehasta) * habitaciones[i].tarifa);
    }

    for (let i = 0; i < adicionales.length; i++) {

      sum = sum + (adicionales[i].tarifa * adicionales[i].cantidad);
    }

    this.model.total = sum;

    return this.model.total;
  }

  private nightDiff(fedesde: Date, fehasta: Date) {

    return this.reservaService.getNumeroNoches(fedesde, fehasta);
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

  private mapSocial() {

    for (let i = 0; i < this.redes.length; i++) {

      for (let j = 0; j < this.model.hospedaje.redes.length; j++) {

        if (this.redes[i].idSocial === this.model.hospedaje.redes[j].idsocial) {

          this.redes[i].valor = this.model.hospedaje.redes[j].valor;
          // break;
        }
      }
    }
  }

  private loadSocial() {

    this.socialService.getAll().subscribe(social => {

      if (social.success) {

        this.redes = social.data;
        this.mapSocial();
      } else {
        console.log('Error>> loadInfo>> ' + social.mensaje);
      }

    });
  }

  findByIdDb(arreglo: any[], id: number, feIn: Date) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].idhabitacion === id &&
        (feIn >= this.getDateString('/', arreglo[i].fedesde)
          && feIn <= this.getDateString('/', arreglo[i].fehasta))) {
            return i;
          }
    }

    return -1;
  }

  private getDateString(delimiter: string, date: string) {

    const auxDate = date.split(delimiter);
    return new Date(Number(auxDate[2]), Number(auxDate[1]) - 1, Number(auxDate[0]), 0, 0, 0, 0);
  }

  private setDateHab(arreglo: any[]) {
    for (let i = 0; i < arreglo.length; i++) {

      arreglo[i].fedesde = this.getDateString('/', arreglo[i].fedesde);
      arreglo[i].fehasta = this.getDateString('/', arreglo[i].fehasta);
    }

    return arreglo;
  }

  private showMess() {

    setTimeout(() => {

      jQuery('#messModal').modal('show');
    }, 200);
  }

}

