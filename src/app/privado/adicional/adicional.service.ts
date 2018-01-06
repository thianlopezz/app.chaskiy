import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class AdicionalService {

    constructor(private http: Http) { }

    getAll() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const param = encodeURIComponent('<params accion="C" idHospedaje = "' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/adicionales/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(adicional: any) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        adicional.idHospedaje = currentUser.idHospedaje;
        adicional.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/adicionales/', adicional, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
