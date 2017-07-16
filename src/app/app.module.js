"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var login_service_1 = require("./login.service");
//import { AlertDirective } from './alert.directive';
var alert_component_1 = require("./alert/alert.component");
//import { AlertComponent } from './_directives/index';
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./register/register.component");
var landing_component_1 = require("./landing/landing.component");
var index_1 = require("./_services/index");
var index_2 = require("./_guards/index");
var app_routing_1 = require("./app.routing");
var reserva_component_1 = require("./reserva/reserva.component");
var room_component_1 = require("./room/room.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            //AlertDirective,
            alert_component_1.AlertComponent,
            home_component_1.HomeComponent,
            register_component_1.RegisterComponent,
            landing_component_1.LandingComponent,
            reserva_component_1.ReservaComponent,
            room_component_1.RoomComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing // Add routes to the app
        ],
        providers: [login_service_1.LoginService,
            index_2.AuthGuard,
            index_1.AlertService,
            index_1.AuthenticationService,
            index_1.RoomService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
