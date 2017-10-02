import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Passenger } from '../_models/index';

@Injectable()
export class PassengerService {

    constructor(private http: Http) { }

    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }

    getById(correo: string) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        var param = encodeURIComponent('<params accion="C1" correo = "'+ correo +'" idHospedaje = "'+ currentUser.idHospedaje +'" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pass) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        pass.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/pasajeros/', pass, this.jwt()).map((response: Response) => response.json());
    }

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
