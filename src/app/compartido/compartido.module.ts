import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { GenericoComponent } from './generico/generico.component';
import { ModalConfirmacionComponent } from './components/modal-confirmacion/modal-confirmacion.component';
import { ModalMensajeComponent } from './components/modal-mensaje/modal-mensaje.component';
import { ConfirmacionEventService } from './components/modal-confirmacion/confirmacion-event.service';
import { ConfirmacionService } from './components/modal-confirmacion/confirmacion.service';
import { MensajeService } from './components/modal-mensaje/mensaje.service';
import { MyDatePickerModule } from 'mydatepicker';

import { ToastService } from '../compartido/services/toast.service';
import { Err404Component } from './err404/err404.component';
import { CardNotificacionesComponent } from './components/card-notificaciones/card-notificaciones.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  exports: [
    // MyDatePickerModule,
    ModalConfirmacionComponent,
    ModalMensajeComponent,
    SpinnerComponent,
    HeaderComponent,
    HttpModule
  ],
  providers: [
    ConfirmacionEventService,
    ConfirmacionService,
    MensajeService,
    ToastService
  ],
  declarations: [
    GenericoComponent,
    ModalConfirmacionComponent,
    ModalMensajeComponent,
    Err404Component,
    CardNotificacionesComponent,
    SpinnerComponent,
    HeaderComponent
  ]
})
export class CompartidoModule { }
