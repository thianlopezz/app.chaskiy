import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HospedajeService {

    constructor(private http: Http) { }

    get() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        const param = encodeURIComponent('<params accion="C" idhospedaje = "' + chasker.idhospedaje + '" />');
        return this.http.get('/api/hospedaje/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(registro: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        registro.idhospedaje = chasker.idhospedaje;
        registro.idhsuario = chasker.idhsuario;
        return this.http.post('/api/hospedaje/', registro, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
