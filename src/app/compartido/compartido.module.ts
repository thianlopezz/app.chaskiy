import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { GenericoComponent } from './generico/generico.component';
import { ModalConfirmacionComponent } from './components/modal-confirmacion/modal-confirmacion.component';
import { ModalMensajeComponent } from './components/modal-mensaje/modal-mensaje.component';
import { MensajeService } from './components/modal-mensaje/mensaje.service';
import { MyDatePickerModule } from 'mydatepicker';

import { ToastService } from '../compartido/services/toast.service';
import { Err404Component } from './err404/err404.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltrarPipe } from './pipes/filtrar.pipe';
import { PInputComponent } from './components/p-input/p-input.component';
import { PSelectComponent } from './components/p-select/p-select.component';
import { PTextAreaComponent } from './components/p-text-area/p-text-area.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule, MyDatePickerModule, FormsModule, RouterModule, HttpModule],
  exports: [
    // MyDatePickerModule,
    ModalConfirmacionComponent,
    ModalMensajeComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    HttpModule,
    FiltrarPipe,
    PInputComponent,
    PSelectComponent,
    PTextAreaComponent,
    CardComponent,
    ModalComponent
  ],
  providers: [MensajeService, ToastService],
  declarations: [
    GenericoComponent,
    ModalConfirmacionComponent,
    ModalMensajeComponent,
    Err404Component,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    FiltrarPipe,
    PInputComponent,
    PSelectComponent,
    PTextAreaComponent,
    CardComponent,
    ModalComponent,
    InputComponent
  ]
})
export class CompartidoModule {}
