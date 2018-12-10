import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { ReservaService } from '../reserva/reserva.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { AutenticacionService } from '../../publico/services/autenticacion.service';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  reservadosDb: any[] = [];

  loadingllegadas = true;
  loadingsalidas = true;
  loadingestancias = true;
  loadingrecientes = true;

  llegadas: any[] = [];
  salidas: any[] = [];
  estancias: any[] = [];

  user: any;

  modiFecha = 'Hoy';

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    openSelectorOnInputClick: true,
    showClearDateBtn: false,
    width: '60%'
  };

  public fecha: any;
  subscription: any;
  model: any;

  constructor(private autenticacionService: AutenticacionService,
    private reservaService: ReservaService,
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
  }

  onCambiarEstado(event) {
    // ESTADOS Ci Co
    this.model = Object.assign({}, event.model);
    this.model.a_estado = event.estado;
    jQuery('#estadosModal').modal('show');
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

    this.loadingrecientes = true;

    const dia = 1000 * 60 * 60 * 24;

    const _feDesde = new Date();
    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    const _feHasta = new Date(new Date(new Date().getTime() + (dia * 7)));
    const feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


    this.reservaService.getByDate('C2', _feDesde, _feHasta).subscribe(
      reservas => {

        if (reservas.success) {

          this.reservadosDb = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
        this.loadingrecientes = false;
      });
  }

  private getLlegadas(_feDesde: Date) {

    this.loadingllegadas = true;

    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    this.reservaService.getByDate('C3', _feDesde, _feDesde).subscribe(
      reservas => {

        if (reservas.success) {

          this.llegadas = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
        this.loadingllegadas = false;
      });
  }

  private getSalidas(_feHasta: Date) {

    this.loadingsalidas = true;

    _feHasta = new Date(_feHasta.getTime() - (1000 * 60 * 60 * 24));

    const feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


    this.reservaService.getByDate('C4', _feHasta, _feHasta).subscribe(
      reservas => {

        if (reservas.success) {

          this.salidas = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
        this.loadingsalidas = false;
      });
  }

  private getEstancias(_feDesde: Date) {

    this.loadingestancias = true;

    const feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

    this.reservaService.getByDate('C5', _feDesde, _feDesde).subscribe(
      reservas => {

        if (reservas.success) {

          this.estancias = reservas.data;
        } else {

          console.log('Error>> getByDate>> ' + reservas.mensaje);
        }
        this.loadingestancias = false;
      });
  }

  onSuccessEstados() {
    this.refresca();
  }

  onCancelaEstados() {
    jQuery('#estadosModal').modal('hide');
  }
}

