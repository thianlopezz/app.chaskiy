import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as jwt_decode from 'jwt-decode';
import { debug } from 'util';
export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AutenticacionService {

    constructor(private http: Http) { }

    login(user: any) {

        user.username = user.username.trim();
        user.password = user.password.trim();

        return this.http.post('/api/auth/login/', user)
            .map((response: Response) => {

                const _response = response.json();

                if (_response.success) {

                    const _user = _response.usuario;
                    if (_user && _user.token) {
                        localStorage.setItem('chasker', JSON.stringify(_user));
                        return _response;
                    }
                } else {
                    return _response;
                }
            });
    }

    getLogin() {

        return JSON.parse(localStorage.getItem('chasker'));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('chasker');
    }

    isTokenExpired(token?: string): boolean {
        if (!this.getLogin()) { return true; }
        if (!token) { token = this.getLogin().token; }
        if (!token) { return true; }

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) { return false; }
        return !(date.valueOf() > new Date().valueOf());
    }

    private getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);

        if (decoded.exp === undefined) {
            return null;
        }

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
}
