import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CompartidoModule } from './compartido/compartido.module';
import { PrivadoModule } from './privado/privado.module';
import { PublicoModule } from './publico/publico.module';

import { routing } from './rutas/app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CompartidoModule,
    PrivadoModule,
    PublicoModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
