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
var _config = "http://localhost:3000";
var RoomService = (function () {
    function RoomService(http) {
        this.http = http;
    }
    RoomService.prototype.getAll = function () {
        return this.http.get(_config + '/api/rooms', this.jwt()).map(function (response) { return response.json(); });
    };
    // getById(id: string) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    RoomService.prototype.create = function (room) {
        return this.http.post(_config + '/api/rooms', room, this.jwt()).map(function (response) { return response.json(); });
    };
    // update(room: Room) {
    //     return this.http.put('/api/users/' + room.id, room, this.jwt()).map((response: Response) => response.json());
    // }
    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }
    // private helper methods
    RoomService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'x-access-token': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return RoomService;
}());
RoomService = __decorate([
    core_1.Injectable()
], RoomService);
exports.RoomService = RoomService;
