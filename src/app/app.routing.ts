﻿import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RoomComponent } from './room/room.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { RegistrosuccessComponent } from './registrosuccess/registrosuccess.component';
import { PasswordComponent } from './password/password.component';
import { ActivaCuentaComponent } from './activa-cuenta/activa-cuenta.component';
import { PagosComponent } from './pagos/pagos.component';
import { RecuperaPassComponent } from './recupera-pass/recupera-pass.component';
import { UpPasswordComponent } from './up-password/up-password.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'index', component: LandingComponent },
    { path: 'registersuccess', component: RegistrosuccessComponent },
    { path: 'reserva', component: ReservaComponent, canActivate: [AuthGuard] },
    { path: 'room', component: RoomComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'adds', component: AdicionalComponent, canActivate: [AuthGuard] },
    { path: 'pass', component: PasswordComponent, canActivate: [AuthGuard] },
    { path: 'pagos', component: PagosComponent, canActivate: [AuthGuard] },
    { path: 'confirmachaskiy', component: ActivaCuentaComponent },
    { path: 'recupera', component: RecuperaPassComponent },
    { path: 'uppass', component: UpPasswordComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
