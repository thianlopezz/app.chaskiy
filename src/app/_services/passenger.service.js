"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var PassengerService = (function () {
    function PassengerService(http) {
        this.http = http;
    }
    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }
    PassengerService.prototype.getById = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var param = encodeURIComponent('<params accion="C1" identificacion = "' + id + '" idHospedaje = "' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map(function (response) { return response.json(); });
    };
    // create(room: Room) {
    //     return this.http.post(_config + '/api/rooms', room, this.jwt()).map((response: Response) => response.json());
    // }
    // update(room: Room) {
    //     return this.http.put(_config + '/api/rooms/' + room._id, room, this.jwt()).map((response: Response) => response.json());
    // }
    // delete(room: Room) {
    //     return this.http.delete(_config + '/api/rooms/' + room._id, this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    PassengerService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'x-access-token': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return PassengerService;
}());
PassengerService = __decorate([
    core_1.Injectable()
], PassengerService);
exports.PassengerService = PassengerService;
