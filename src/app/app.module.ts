
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login.service';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';

import { AlertService, ConfirmService, AuthenticationService, AcceptService,
          RoomService, AerolineaService, PassengerService, ReserveService, PaisService,
          AdicionalService, MessageService, FormaPagoService, PagoService, RegisterService,
          GoogleAnalyticsEventsService, StatisticService, HospedajeService, SocialService,
          FuenteService } from './_services/index';

import { AuthGuard } from './_guards/index';
import { routing } from './app.routing';
import { ReservaComponent } from './reserva/reserva.component';
import { RoomComponent } from './room/room.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ModalMessageComponent } from './modal-message/modal-message.component';

import { Select2Module } from 'ng2-select2';
import { CurrencyDirective } from './_directives/currency.directive';
import { CurrencyPipePipe } from './_pipes/currency-pipe.pipe';
import { AdicionalComponent } from './adicional/adicional.component';

import { MyDatePickerModule } from 'mydatepicker';
import { CardReservasComponent } from './card-reservas/card-reservas.component';
import { DetalleEstadosComponent } from './detalle-estados/detalle-estados.component';
import { PasswordComponent } from './password/password.component';
import { PagosComponent } from './pagos/pagos.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { HospedajeComponent } from './hospedaje/hospedaje.component';
import { GenericoComponent } from './generico/generico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    LandingComponent,
    ReservaComponent,
    RoomComponent,
    ModalConfirmComponent,
    ModalMessageComponent,
    CurrencyDirective,
    CurrencyPipePipe,
    AdicionalComponent,
    CardReservasComponent,
    DetalleEstadosComponent,
    PasswordComponent,
    PagosComponent,
    CardChartComponent,
    HospedajeComponent,
    GenericoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Select2Module,
    MyDatePickerModule,
    routing// Add routes to the app
  ],
  providers: [LoginService,
              AuthGuard,
              AlertService,
              ConfirmService,
              AcceptService,
              AuthenticationService,
              RoomService,
              AerolineaService,
              PassengerService,
              ReserveService,
              PaisService,
              AdicionalService,
              MessageService,
              CurrencyPipePipe,
              FormaPagoService,
              PagoService,
              RegisterService,
              GoogleAnalyticsEventsService,
              StatisticService,
              HospedajeService,
              SocialService,
              FuenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
