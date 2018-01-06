import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class HospedajeService {

    constructor(private http: Http) { }

    get() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const param = encodeURIComponent('<params accion="C0" idHospedaje = "' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/hospedaje/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(registro: any) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        registro.idHospedaje = currentUser.idHospedaje;
        registro.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/hospedaje/', registro, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
