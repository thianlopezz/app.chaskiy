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
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (user) {
        user.username = user.username.trim();
        user.password = user.password.trim();
        return this.http.post('/api/auth/login/', user)
            .map(function (response) {
            var _response = response.json();
            if (_response.success) {
                var _user = _response.usuario;
                if (_user && _user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(_user));
                    return _response;
                }
            }
            else
                return _response;
        });
    };
    AuthenticationService.prototype.getLogin = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    AuthenticationService.prototype.isLogged = function () {
        return this.http.get('/api/auth/islogged/', this.jwt()).map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.isLoLogged = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser == null || !currentUser.token)
            return false;
        return true;
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'x-access-token': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
