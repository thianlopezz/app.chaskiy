import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class RegistroService {

    constructor(private http: Http) { }

    registro(registro: any) {

        return this.http.post('/api/register/', registro, this.jwt()).map((response: Response) => response.json());
    }

    isRegister(registro: any) {

        return this.http.post('/api/register/isregister', registro, this.jwt()).map((response: Response) => response.json());
    }

    password(model: any) {

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      model.idUsuario = currentUser.idUsuario;

      return this.http.post('/api/register/password', model, this.jwt()).map((response: Response) => response.json());
    }

    enviaRecupera(correo: any) {

        return this.http.post('/api/register/enviarecupera', correo, this.jwt()).map((response: Response) => response.json());
    }

    upRecupera(registro) {

        return this.http.post('/api/register/uprecupera', registro, this.jwt()).map((response: Response) => response.json());
    }

    activa(token) {

        return this.http.post('/api/register/activa', {token: token}, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
