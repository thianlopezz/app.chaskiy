import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RoomComponent } from './room/room.component';

const appRoutes: Routes = [
    { path: '', component: LandingComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'index', component: LandingComponent },
    { path: 'reserva', component: ReservaComponent },
    { path: 'room', component: RoomComponent },
    { path: 'home', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);