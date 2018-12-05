import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AdicionalService {

    constructor(private http: Http) { }

    get() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.get('/api/adicionales/all/' + chasker.idHospedaje, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    mantenimiento(adicional: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        adicional.idHospedaje = chasker.idHospedaje;
        adicional.idUsuario = chasker.idUsuario;
        return this.http.post('/api/adicionales/', adicional, this.jwt())
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
