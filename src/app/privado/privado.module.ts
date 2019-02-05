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

import { AdicionalService } from './adicional/adicional.service';
import { HabitacionService } from './habitacion/habitacion.service';
import { HospedajeService } from './hospedaje/hospedaje.service';
import { PagoService } from './pagos/pago.service';
import { ReservaService } from './reserva/reserva.service';
import { AerolineaService } from './services/aerolinea.service';
import { PasajeroService } from './pasajero/pasajero.service';
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
import { NotificacionService } from './notificaciones/notificacion.service';

import { CardNotificacionesComponent } from './components/card-notificaciones/card-notificaciones.component';
import { PasajeroComponent } from './pasajero/pasajero.component';
import { CalendarioComponent } from './reserva/calendario/calendario.component';
import { ModalReservaComponent } from './reserva/modal-reserva/modal-reserva.component';
import { DetalleReservaComponent } from './reserva/modal-reserva/detalle-reserva/detalle-reserva.component';
import { ModalPagoComponent } from './pagos/modal-pago/modal-pago.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { OcupacionComponent } from './ocupacion/ocupacion.component';
import { CaptacionComponent } from './captacion/captacion.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MarcacionComponent } from './marcacion/marcacion.component';

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
    NotificacionesComponent,
    CardNotificacionesComponent,
    PasajeroComponent,
    CalendarioComponent,
    ModalReservaComponent,
    DetalleReservaComponent,
    ConfiguracionComponent,
    OcupacionComponent,
    CaptacionComponent,
    AnalyticsComponent,
    MarcacionComponent
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
    RouteActivatorService,
    NotificacionService
  ]
})
export class PrivadoModule { }
