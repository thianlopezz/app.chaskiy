import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class RegistroService {

    constructor(private http: Http) { }

    registro(registro: any) {

        return this.http.post('/api/register/', registro, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    isRegister(registro: any) {

        return this.http.post('/api/register/isregister', registro, this.jwt()).pipe(map((response: Response) => response.json()));
    }

    password(model: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));
        model.idUsuario = chasker.idUsuario;

        return this.http.post('/api/register/password', model, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    enviaRecupera(correo: any) {

        return this.http.post('/api/register/enviarecupera', correo, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    upRecupera(registro) {

        return this.http.post('/api/register/uprecupera', registro, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    activa(token) {

        return this.http.post('/api/register/activa', { token: token }, this.jwt())
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
