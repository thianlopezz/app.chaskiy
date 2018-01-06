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
import { Select2Module } from 'ng2-select2';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    Select2Module,
    MyDatePickerModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  exports: [
    Select2Module,
    // MyDatePickerModule,
    ModalConfirmacionComponent,
    ModalMensajeComponent,
    HttpModule
  ],
  providers: [
    ConfirmacionEventService,
    ConfirmacionService,
    MensajeService
  ],
  declarations: [GenericoComponent, ModalConfirmacionComponent, ModalMensajeComponent]
})
export class CompartidoModule { }