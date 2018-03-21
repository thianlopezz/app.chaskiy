import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PasajeroService {

    constructor(private http: Http) { }

    getAll() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        const param = encodeURIComponent('<params accion="C"'
            + ' idhospedaje = "' + chasker.idhospedaje + '" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getById(correo: string) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        const param = encodeURIComponent('<params accion="C1" correo = "' + correo
                                            + '" idhospedaje = "' + chasker.idhospedaje + '" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pass) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));
        pass.idhospedaje = chasker.idhospedaje;
        pass.idusuario = chasker.idusuario;
        
        return this.http.post('/api/pasajeros/', pass, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
