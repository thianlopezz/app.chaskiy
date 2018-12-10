import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PasajeroService {

    constructor(private http: Http) { }

    getAll() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.get('/api/pasajeros/all/' + chasker.idHospedaje, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    getByCorreo(correo: string) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.get('/api/pasajeros/correo/' + correo + '/' + chasker.idHospedaje, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    mantenimiento(pass) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));
        pass.idHospedaje = chasker.idHospedaje;
        pass.idUsuario = chasker.idUsuario;

        return this.http.post('/api/pasajeros/', pass, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
