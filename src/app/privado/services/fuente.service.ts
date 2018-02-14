import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class FuenteService {

    chasker: any;

    constructor(private http: Http) { }

    getAll() {

        const param = encodeURIComponent('<params accion="C" />');
        return this.http.get('/api/fuente/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
