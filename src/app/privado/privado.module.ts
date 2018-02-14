import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CardChartComponent } from './components/card-chart/card-chart.component';
import { CardReservaComponent } from './components/card-reserva/card-reserva.component';
import { ModalEstadosComponent } from './components/modal-estados/modal-estados.component';
import { HomeComponent } from './home/home.component';
import { HospedajeComponent } from './hospedaje/hospedaje.component';
import { PagosComponent } from './pagos/pagos.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { ModalPagoComponent } from './components/modal-pago/modal-pago.component';

import { AdicionalService } from './adicional/adicional.service';
import { HabitacionService } from './habitacion/habitacion.service';
import { HospedajeService } from './hospedaje/hospedaje.service';
import { PagoService } from './pagos/pago.service';
import { ReservaService } from './reserva/reserva.service';
import { AerolineaService } from './services/aerolinea.service';
import { PasajeroService } from './services/pasajero.service';
import { EstadisticaService } from './services/estadistica.service';
import { FormaPagoService } from './services/forma-pago.service';
import { FuenteService } from './services/fuente.service';
import { GoogleAnalyticsEventsService } from './services/google-analytics-events.service';
import { PaisService } from './services/pais.service';
import { SocialService } from './services/social.service';
import { TarifaService } from './tarifa/tarifa.service';
import { RouteActivatorService } from './services/route-activator.service';

import { MonedaDirective } from './directives/moneda.directive';
import { MonedaPipe } from './pipes/moneda.pipe';

import { CompartidoModule } from '../compartido/compartido.module';

import { MyDatePickerModule } from 'mydatepicker';
import { TarifaComponent } from './tarifa/tarifa.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CompartidoModule,
    MyDatePickerModule
  ],
  declarations: [
    CardChartComponent,
    CardReservaComponent,
    ModalEstadosComponent,
    HomeComponent,
    HospedajeComponent,
    PagosComponent,
    ContrasenaComponent,
    HabitacionComponent,
    ReservaComponent,
    MonedaDirective,
    MonedaPipe,
    AdicionalComponent,
    ModalPagoComponent,
    TarifaComponent,
    NotificacionesComponent
  ],
  providers: [
    AdicionalService,
    HabitacionService,
    HospedajeService,
    PagoService,
    ReservaService,
    AerolineaService,
    EstadisticaService,
    FormaPagoService,
    FuenteService,
    GoogleAnalyticsEventsService,
    PaisService,
    PasajeroService,
    SocialService,
    TarifaService,
    MonedaPipe,
    RouteActivatorService
  ]
})
export class PrivadoModule { }
