import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from '../reserva/reserva.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { AutenticacionService } from '../../publico/services/autenticacion.service'
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reservadosDb: any[] = [];

  llegadas: any[] = [];
  salidas: any[] = [];
  estancias: any[] = [];

  user: any;

  modiFecha = 'Hoy';

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    openSelectorOnInputClick: true,
    showClearDateBtn: false
  };

  public fecha: any;
  subscription: any;
  model: any;

  constructor(private router: Router,
    private autenticacionService: AutenticacionService,
    private reservaService: ReservaService,
    private confirmaEventService: ConfirmacionEventService,
    private mensajeService: MensajeService) { }

  ngOnInit() {

    this.getByDate();

    this.user = this.autenticacionService.getLogin();

    const date = new Date();

    this.fecha = {
      date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
      }
    };

    this.getLlegadas(new Date());
    this.getSalidas(new Date());
    this.getEstancias(new Date());

    this.subscription = this.confirmaEventService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  selectedVal(resp) {

    if (resp.model) {
      this.model = resp.model;
    }

    if (resp.modo === 'Ci' || resp.modo === 'Co') {

      this.model.estadoDetalle = resp.model.observacion;
      this.check(resp.modo);
    }
  }

  check(check: string) {

    this.model.accion = 'Es';
    this.model.pass = {};

    let mensaje = '';
    let mensaje_err = '';

    switch (check) {
      case 'Ci':
        mensaje = 'Check-in éxitoso';
        mensaje_err = 'Ocurrió un error en el check in';
        break;
      case 'Co':
        mensaje = 'Check-out éxitoso';
        mensaje_err = 'Ocurrió un error en el check-out';
        break;
    }

    if (check === 'Co' && (this.model.total - this.model.totalPagado) > 0) {

      jQuery('#detalleEstadosModal').modal('hide');

      this.mensajeService.error('No se puede realizar el proceso de check-out debido a que hay un saldo pendiente');
      this.showMess();
      return;
    }

    this.model.estado = check;


    this.reservaService.mantenimiento(this.model)
      .subscribe(
      data => {

        if (data.success) {

          this.refresca();

          jQuery('#detalleEstadosModal').modal('hide');
          this.getByDate();

          this.mensajeService.success(mensaje);
          this.showMess();
        } else {

          jQuery('#detalleEstadosModal').modal('hide');

          this.mensajeService.error(data.mensaje);
          this.showMess();
        }
      },
      error => {

        jQuery('#detalleEstadosModal').modal('hide');

        console.log(error);

        this.mensajeService.error(mensaje_err);
        this.showMess();
      });
  }

  private refresca() {

    const _fecha = new Date(new Date(this.fecha.date.year, this.fecha.date.month - 1, this.fecha.date.day, 0, 0, 0, 0).getTime());

    this.fecha = {
      date: {
        year: _fecha.getFullYear(),
        month: _fecha.getMonth() + 1,
        day: _fecha.getDate()
      }
    };

    this.getLlegadas(_fecha);
    this.getSalidas(_fecha);
    this.getEstancias(_fecha);
  }

  private showMess() {

    setTimeout(() => {

      jQuery('#messModal').modal('show');
    }, 200);
  }

  onDateChanged(event: IMyDateModel) {

    const _fecha = new Date(event.date.year, event.date.month - 1, event.date.day, 0, 0, 0, 0);


    this.fecha = {
      date: {
        year: event.date.year,
        month: event.date.month,
        day: event.date.day
      }
    };

    this.getModiFecha();

    this.getLlegadas(_fecha);
    this.getSalidas(_fecha);
    this.getEstancias(_fecha);
  }

  nextDate() {

    const _fecha = new Date(new Date(this.fecha.date.year,
      this.fecha.date.month - 1,
      this.fecha.date.day, 0, 0, 0, 0).getTime() + (1000 * 60 * 60 * 24));

    this.fecha = {
      date: {
        year: _fecha.getFullYear(),
        month: _fecha.getMonth() + 1,
        day: _fecha.getDate()
      }
    };

    this.getModiFecha();

    this.getLlegadas(_fecha);
    this.getSalidas(_fecha);
    this.getEstancias(_fecha);
  }

  previousDate() {

    const _fecha = new Date(new Date(this.fecha.date.year,
      this.fecha.date.month - 1,
      this.fecha.date.day, 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24));

    this.fecha = {
      date: {
        year: _fecha.getFullYear(),
        month: _fecha.getMonth() + 1,
        day: _fecha.getDate()
      }
    };

    this.getModiFecha();

    this.getLlegadas(_fecha);
    this.getSalidas(_fecha);
    this.getEstancias(_fecha);
  }

  getModiFecha() {

    const today = new Date();
    const tomorrow = new Date(new Date(today.getFullYear(),
      today.getMonth(),
      today.getDate(), 0, 0, 0, 0).getTime() + (1000 * 60 * 60 * 24));

    const yesterday = new Date(new Date(today.getFullYear(),
      today.getMonth(),
      today.getDate(), 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24));

    if (this.fecha.date.year === today.getFullYear()
      && this.fecha.date.month === (today.getMonth() + 1)
      && this.fecha.date.day === today.getDate()) {

      this.modiFecha = 'Hoy';
    } else if (this.fecha.date.year === tomorrow.getFullYear()
      && this.fecha.date.month === (tomorrow.getMonth() + 1)
      && this.fecha.date.day === tomorrow.getDate()) {

      this.modiFecha = 'Mañana';
    } else if (this.fecha.date.year === yesterday.getFullYear()
      && this.fecha.date.month === (yesterday.getMonth() + 1)
      && this.fecha.date.day === yesterday.getDate()) {

      this.modiFecha = 'Ayer';
    } else {

      this.modiFecha = this.fecha.date.day + '/' + this.fecha.date.month + '/' + this.fecha.date.year;
    }
  }

  nightDiff(reserva: any) {

    return this.reservaService.getNumeroNoches(new Date(reserva.feDesde), new Date(reserva.feHasta));
  }

  private getByDate() {

    const dia = 1000 * 60 * 60 * 24;

    const _feDesde = new Date();
    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    const _feHasta = new Date(new Date(new Date().getTime() + (dia * 7)));
    const feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


    this.reservaService.getByDate('C2', feDesde, feHasta).subscribe(
      reservas => {

        if (reservas.success) {

          this.reservadosDb = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }

  private getLlegadas(_feDesde: Date) {

    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    this.reservaService.getByDate('C3', feDesde, feDesde).subscribe(
      reservas => {

        if (reservas.success) {

          this.llegadas = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }

  private getSalidas(_feHasta: Date) {

    _feHasta = new Date(_feHasta.getTime() - (1000 * 60 * 60 * 24));

    const feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


    this.reservaService.getByDate('C4', feHasta, feHasta).subscribe(
      reservas => {

        if (reservas.success) {

          this.salidas = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }

  private getEstancias(_feDesde: Date) {

    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    this.reservaService.getByDate('C5', feDesde, feDesde).subscribe(
      reservas => {

        if (reservas.success) {

          this.estancias = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
      });
  }
}

