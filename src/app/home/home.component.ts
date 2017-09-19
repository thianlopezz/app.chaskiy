import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService, AuthenticationService, ReserveService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    reservadosDb: any[] = [];

    llegadas: any[] = [];
    salidas: any[] = [];
    estancias: any[] = [];

    user: any;

    modiFecha: string = "Hoy";

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
        openSelectorOnInputClick: true,
        showClearDateBtn: false
    };

    public fecha: any;

    constructor(private authService: AuthenticationService,
                private router: Router,
                private reserveService: ReserveService,
                private zone: NgZone) {  }//this.zone.run(() => {});

    ngOnInit() {

        debugger;

        this.isLogged();

        this.getByDate();
        //this.zone.run(() => {});

        this.user = this.authService.getLogin();

        let date = new Date();

        this.fecha = { date: {
                        year: date.getFullYear(),
                        month: date.getMonth() + 1,
                        day: date.getDate() }
                      }

        // this.getLlegadas(new Date());
        // this.getSalidas(new Date());
        // this.getEstancias(new Date());
    }

    onDateChanged(event: IMyDateModel) {

      //console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
      var _fecha = new Date(event.date.year, event.date.month -1, event.date.day, 0, 0, 0, 0);


      this.fecha = { date: {
                      year: event.date.year,
                      month: event.date.month,
                      day: event.date.day }
                    };

      this.getModiFecha();

      this.getLlegadas(_fecha);
      this.getSalidas(_fecha);
      this.getEstancias(_fecha);
    }

    nextDate(){

      var _fecha = new Date(new Date(this.fecha.date.year, this.fecha.date.month -1, this.fecha.date.day, 0, 0, 0, 0).getTime() + (1000 * 60 * 60 * 24));

      this.fecha = { date: {
                      year: _fecha.getFullYear(),
                      month: _fecha.getMonth() + 1,
                      day: _fecha.getDate() }
                    };

      this.getModiFecha();

      this.getLlegadas(_fecha);
      this.getSalidas(_fecha);
      this.getEstancias(_fecha);
    }

    previousDate(){

      var _fecha = new Date(new Date(this.fecha.date.year, this.fecha.date.month -1, this.fecha.date.day, 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24));

      this.fecha = { date: {
                      year: _fecha.getFullYear(),
                      month: _fecha.getMonth() + 1,
                      day: _fecha.getDate() }
                    };

      this.getModiFecha();

      this.getLlegadas(_fecha);
      this.getSalidas(_fecha);
      this.getEstancias(_fecha);
    }

    getModiFecha(){

      var today = new Date();
      var tomorrow = new Date(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime() + (1000 * 60 * 60 * 24));
      var yesterday = new Date(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24));

      if(this.fecha.date.year == today.getFullYear()
      && this.fecha.date.month == (today.getMonth() + 1)
      && this.fecha.date.day == today.getDate()){

      this.modiFecha = "Hoy";
      }
      else
      if(this.fecha.date.year == tomorrow.getFullYear()
        && this.fecha.date.month == (tomorrow.getMonth() + 1)
        && this.fecha.date.day == tomorrow.getDate()){

          this.modiFecha = "Mañana";
        }
        else
          if(this.fecha.date.year == yesterday.getFullYear()
              && this.fecha.date.month == (yesterday.getMonth() + 1)
              && this.fecha.date.day == yesterday.getDate()){

                this.modiFecha = "Ayer";
              }
              else{

                this.modiFecha = this.fecha.date.day + "/" + this.fecha.date.month + "/" + this.fecha.date.year;
              }
    }

    nightDiff(reserva: any) {

      return this.reserveService.getNights(new Date(reserva.feDesde), new Date(reserva.feHasta));
    }

    private getByDate() {

        var dia = 1000 * 60 * 60 * 24;

        var _feDesde = new Date();
        var feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

        var _feHasta = new Date(new Date(new Date().getTime() + (dia * 7)));
        var feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


        this.reserveService.getByDate('C2', feDesde, feHasta).subscribe(
            reservas => {

                if(reservas.success){

                    this.reservadosDb = reservas.data;
                }
                else
                {

                    console.log('Error>> getByDate>> ' + reservas.mensaje);
                }
        });
    }

    private getLlegadas(_feDesde: Date) {

      debugger;

        var feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();


        this.reserveService.getByDate('C3', feDesde, feDesde).subscribe(
            reservas => {

                            debugger;

                if(reservas.success){

                    this.llegadas = reservas.data;
                }
                else
                {

                    console.log('Error>> getByDate>> ' + reservas.mensaje);
                }
        });
    }

    private getSalidas(_feHasta: Date) {
debugger;
        _feHasta = new Date(_feHasta.getTime() - (1000 * 60 * 60 * 24));

        var feHasta = _feHasta.getDate() + '/' + (_feHasta.getMonth() + 1) + '/' + _feHasta.getFullYear();


        this.reserveService.getByDate('C4', feHasta, feHasta).subscribe(
            reservas => {

                            debugger;

                if(reservas.success){

                    this.salidas = reservas.data;
                }
                else
                {

                    console.log('Error>> getByDate>> ' + reservas.mensaje);
                }
        });
    }

    private getEstancias(_feDesde: Date) {
      debugger;

        var feDesde = _feDesde.getDate() + '/' + (_feDesde.getMonth() + 1) + '/' + _feDesde.getFullYear();

        this.reserveService.getByDate('C5', feDesde, feDesde).subscribe(
            reservas => {

              debugger;

                if(reservas.success){

                    this.estancias = reservas.data;
                }
                else
                {

                    console.log('Error>> getByDate>> ' + reservas.mensaje);
                }
        });
    }

    private isLogged(){

        this.authService.isLogged().subscribe(
                                    response =>
                                    {

                                        if(!response.success)
                                            this.router.navigate(['/login']);
                                    },
                                    error => this.router.navigate(['/login']) );
    }
}
