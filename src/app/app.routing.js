"use strict";
exports.__esModule = true;
var router_1 = require("@angular/router");
var index_1 = require("./_guards/index");
var landing_component_1 = require("./landing/landing.component");
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var reserva_component_1 = require("./reserva/reserva.component");
var room_component_1 = require("./room/room.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [index_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'index', component: landing_component_1.LandingComponent },
    { path: 'reserva', component: reserva_component_1.ReservaComponent },
    { path: 'room', component: room_component_1.RoomComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
