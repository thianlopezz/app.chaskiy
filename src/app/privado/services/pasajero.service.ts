import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PasajeroService {

    constructor(private http: Http) { }

    getById(correo: string) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const param = encodeURIComponent('<params accion="C1" correo = "' + correo
                                            + '" idHospedaje = "' + currentUser.idHospedaje + '" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pass) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        pass.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/pasajeros/', pass, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
