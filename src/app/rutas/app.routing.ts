import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../publico/index/index.component';
import { RegistroComponent } from '../publico/registro/registro.component';
import { LoginComponent } from '../publico/login/login.component';

import { GenericoComponent } from '../compartido/generico/generico.component';

import { HomeComponent } from '../privado/home/home.component';
import { ReservaComponent } from '../privado/reserva/reserva.component';
import { HabitacionComponent } from '../privado/habitacion/habitacion.component';
import { AdicionalComponent } from '../privado/adicional/adicional.component';
import { ContrasenaComponent } from '../privado/contrasena/contrasena.component';
import { PagosComponent } from '../privado/pagos/pagos.component';
import { HospedajeComponent } from '../privado/hospedaje/hospedaje.component';
import { TarifaComponent } from '../privado/tarifa/tarifa.component';
import { Err404Component } from '../compartido/err404/err404.component';
import { RouteActivatorService } from '../privado/services/route-activator.service';

const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },

    { path: 'generico', component: GenericoComponent },
    { path: '404', component: Err404Component },
//canActivate: [RouteActivatorService]
    { path: 'home', component: HomeComponent },
    { path: 'reservas', component: ReservaComponent },
    { path: 'habitacion', component: HabitacionComponent },
    { path: 'adicional', component: AdicionalComponent },
    { path: 'contrasena', component: ContrasenaComponent },
    { path: 'pagos', component: PagosComponent },
    { path: 'hospedaje', component: HospedajeComponent },
    { path: 'tarifa', component: TarifaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
