import { Component, OnInit } from '@angular/core';
import { AlertService, AuthenticationService, ReserveService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
 
//import { User } from '../_models/index';
//import { UserService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {

    currentUser: any;

    reservadosDb: any[] = [];
 
    constructor(private authService: AuthenticationService,
                private router: Router,
                private reserveService: ReserveService) { 

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
 
    ngOnInit() {
        this.isLogged();
        this.getByDate();
    }

    checked(reserva: any){

        if(reserva.estado == 'E')
            return {'card-inverse card-danger': true};
        else{

            if(reserva.checkin){

                if(!reserva.checkout)
                    return {'card-inverse card-warning': true};
                else
                    return {'': true};
            }
            else
                return {'card-inverse card-info': true};
        }
    }

    private getByDate() {
        debugger;

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
                                    }, error => this.router.navigate(['/login']) );
    }
}