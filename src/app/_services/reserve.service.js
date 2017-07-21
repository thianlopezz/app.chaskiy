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
var ReserveService = (function () {
    function ReserveService(http) {
        this.http = http;
    }
    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }
    ReserveService.prototype.getById = function (id) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var param = encodeURIComponent('<params accion = "C1" idReserva= "' + id + '" idHospedaje="' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/reservas/' + param, this.jwt()).map(function (response) { return response.json(); });
    };
    ReserveService.prototype.getByDate = function (consulta, feDesde, feHasta) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var param = encodeURIComponent('<params accion = "' + consulta + '" feDesde= "' + feDesde + '" feHasta= "' + feHasta
            + '" idHospedaje= "' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/reservas/all/' + param, this.jwt()).map(function (response) { return response.json(); });
    };
    ReserveService.prototype.mantenimiento = function (reserve) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        reserve.idHospedaje = currentUser.idHospedaje;
        reserve.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/reservas', reserve, this.jwt()).map(function (response) { return response.json(); });
    };
    ReserveService.prototype.getEstado = function (reserva) {
        if (reserva.estado == 'E')
            return "Cancelada";
        else {
            if (reserva.checkin) {
                if (!reserva.checkout)
                    return "Checked in";
                else
                    return "Checked out";
            }
            else
                return "Reservada";
        }
    };
    // update(room: Room) {
    //     return this.http.put(_config + '/api/rooms/' + room._id, room, this.jwt()).map((response: Response) => response.json());
    // }
    // delete(room: Room) {
    //     return this.http.delete(_config + '/api/rooms/' + room._id, this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    ReserveService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'x-access-token': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return ReserveService;
}());
ReserveService = __decorate([
    core_1.Injectable()
], ReserveService);
exports.ReserveService = ReserveService;
