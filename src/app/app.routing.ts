import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RoomComponent } from './room/room.component';
import { AdicionalComponent } from './adicional/adicional.component';
import { RegistrosuccessComponent } from './registrosuccess/registrosuccess.component';

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

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
