import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RoomComponent } from './room/room.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { PasswordComponent } from './password/password.component';
import { PagosComponent } from './pagos/pagos.component';
import { HospedajeComponent } from './hospedaje/hospedaje.component';
import { GenericoComponent } from './generico/generico.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'index', component: LandingComponent },
    { path: 'reserva', component: ReservaComponent, canActivate: [AuthGuard] },
    { path: 'room', component: RoomComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'adds', component: AdicionalComponent, canActivate: [AuthGuard] },
    { path: 'pass', component: PasswordComponent, canActivate: [AuthGuard] },
    { path: 'pagos', component: PagosComponent, canActivate: [AuthGuard] },
    { path: 'hospedaje', component: HospedajeComponent, canActivate: [AuthGuard] },
    { path: 'generico', component: GenericoComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
