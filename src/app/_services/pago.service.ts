import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Pago } from '../_models/index';

@Injectable()
export class PagoService {

    constructor(private http: Http) { }

    getAll(idReserva: string) {

        var param = encodeURIComponent('<params accion="C" idReserva="'+ idReserva +'" />');
        return this.http.get('/api/pago/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pago: Pago) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        pago.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/pago', pago, this.jwt()).map((response: Response) => response.json());
    }

    // getById(id: string) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // create(room: Room) {
    //     return this.http.post(_config + '/api/rooms', room, this.jwt()).map((response: Response) => response.json());
    // }

    // update(room: Room) {
    //     return this.http.put(_config + '/api/rooms/' + room._id, room, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(room: Room) {
    //     return this.http.delete(_config + '/api/rooms/' + room._id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
