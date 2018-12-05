import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HospedajeService {

    constructor(private http: Http) { }

    get() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.get('/api/hospedaje/all/' + chasker.idHospedaje, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    mantenimiento(registro: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        registro.idHospedaje = chasker.idHospedaje;
        registro.idUsuario = chasker.idUsuario;
        return this.http.post('/api/hospedaje/', registro, this.jwt())
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
