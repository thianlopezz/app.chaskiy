import { Component, OnInit, NgZone } from '@angular/core';
import { AlertService, AuthenticationService, ReserveService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

//import { User } from '../_models/index';
//import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    reservadosDb: any[] = [];

    constructor(private authService: AuthenticationService,
                private router: Router,
                private reserveService: ReserveService,
                private zone: NgZone) { this.zone.run(() => {}); }

    ngOnInit() {
        this.isLogged();
        this.getByDate();
        this.zone.run(() => {});
    }

    getEstado(reserva: any){

        return this.reserveService.getEstado(reserva);
    }

    checked(reserva: any){

        if(reserva.estado == 'Ca')
            return {'': true};
        else
          if(reserva.estado == 'Ci')
            return {'card bg-danger': true};
          else
            if(reserva.estado == 'Co')
              return {'card bg-warning': true};
            else
              if(reserva.estado == 'Re')
                return {'card bg-info': true};
              else
                if(reserva.estado == 'Pr')
                  return {'card bg-info': true};
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
