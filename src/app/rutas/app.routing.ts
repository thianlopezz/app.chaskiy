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
import { PasajeroComponent } from '../privado/pasajero/pasajero.component';
import { TerminosComponent } from '../publico/terminos/terminos.component';
import { PrivacidadComponent } from '../publico/privacidad/privacidad.component';
import { ConfiguracionComponent } from '../privado/configuracion/configuracion.component';
import { OcupacionComponent } from '../privado/ocupacion/ocupacion.component';
import { CaptacionComponent } from '../privado/captacion/captacion.component';
import { AnalyticsComponent } from '../privado/analytics/analytics.component';
import { MarcacionComponent } from '../privado/marcacion/marcacion.component';
import { GaleriaComponent } from '../privado/galeria/galeria.component';
import { HabitacionDetalleComponent } from '../privado/habitacion-detalle/habitacion-detalle.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'privacidad', component: PrivacidadComponent },

  { path: 'generico', component: GenericoComponent },
  { path: '404', component: Err404Component },

  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'reservas',
    component: ReservaComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'pagos',
    component: PagosComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'habitaciones',
    component: HabitacionComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'habitaciones/:idHabitacion',
    component: HabitacionDetalleComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'pasajeros',
    component: PasajeroComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'hospedaje',
    component: HospedajeComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent,
    canActivate: [RouteActivatorService]
  },

  {
    path: 'configuracion/adicionales',
    component: AdicionalComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'configuracion/tarifas',
    component: TarifaComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'contrasena',
    component: ContrasenaComponent,
    canActivate: [RouteActivatorService]
  },

  {
    path: 'analytics',
    component: AnalyticsComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'analytics/ocupacion',
    component: OcupacionComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'analytics/captacion',
    component: CaptacionComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'marcar',
    component: MarcacionComponent,
    canActivate: [RouteActivatorService]
  },
  {
    path: 'galeria',
    component: GaleriaComponent,
    canActivate: [RouteActivatorService]
  },

  // otherwise redirect to 404
  { path: '**', redirectTo: '404' }
];

export const routing = RouterModule.forRoot(appRoutes);
