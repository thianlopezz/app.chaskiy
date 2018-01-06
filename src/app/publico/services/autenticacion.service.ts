import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify(_user));
                        return _response;
                    }
                } else {
                    return _response;
                }
            });
    }

    getLogin() {

        return JSON.parse(localStorage.getItem('currentUser'));
    }

    isLogged() {

        return this.http.get('/api/auth/islogged/', this.jwt()).map((response: Response) => response.json());
    }

    isLoLogged() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser == null || !currentUser.token) {
            return false;
        }

        return true;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
