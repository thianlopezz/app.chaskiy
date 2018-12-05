import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { RegistroService } from './registro/registro.service';

import { AutenticacionService } from './services/autenticacion.service';

import { CompartidoModule } from '../compartido/compartido.module';
import { TerminosComponent } from './terminos/terminos.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CompartidoModule
  ],
  exports: [
    // AutenticacionService
  ],
  declarations: [
    IndexComponent,
    RegistroComponent,
    LoginComponent,
    TerminosComponent,
    PrivacidadComponent
  ],
  providers: [
    AutenticacionService,
    RegistroService
  ]
})
export class PublicoModule { }
