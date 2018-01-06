import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class FuenteService {

    currentUser: any;

    constructor(private http: Http) { }

    getAll() {

        const param = encodeURIComponent('<params accion="C" />');
        return this.http.get('/api/fuente/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
