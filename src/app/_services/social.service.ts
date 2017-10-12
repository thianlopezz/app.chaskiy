import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class SocialService {

    constructor(private http: Http) { }

    getAll() {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        var param = encodeURIComponent('<params accion="C" />');
        return this.http.get('/api/social/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    // mantenimiento(adicional: Adicional) {
    //
    //     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //
    //     adicional.idHospedaje = currentUser.idHospedaje;
    //     adicional.idUsuario = currentUser.idUsuario;
    //     return this.http.post('/api/adicionales/', adicional, this.jwt()).map((response: Response) => response.json());
    // }

    private jwt() {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
