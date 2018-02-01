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

    { path: 'home', component: HomeComponent, canActivate: [RouteActivatorService] },
    { path: 'reservas', component: ReservaComponent, canActivate: [RouteActivatorService] },
    { path: 'habitacion', component: HabitacionComponent, canActivate: [RouteActivatorService] },
    { path: 'adicional', component: AdicionalComponent, canActivate: [RouteActivatorService] },
    { path: 'contrasena', component: ContrasenaComponent, canActivate: [RouteActivatorService] },
    { path: 'pagos', component: PagosComponent, canActivate: [RouteActivatorService] },
    { path: 'hospedaje', component: HospedajeComponent, canActivate: [RouteActivatorService] },
    { path: 'tarifa', component: TarifaComponent, canActivate: [RouteActivatorService] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
