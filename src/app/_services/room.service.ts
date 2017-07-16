import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Habitacion, pathApi } from '../_models/index';

const _config = pathApi.path;

@Injectable()
export class RoomService {

    currentUser: any;
    
    constructor(private http: Http) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    getAll() {
        
        var param = encodeURIComponent('<params accion="C" idHospedaje = "'+ this.currentUser.idHospedaje +'"/>');
        return this.http.get('/api/habitaciones/all/'+ param, this.jwt()).map((response: Response) => response.json());
    }

    // getById(id: string) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    mantenimiento(room: Habitacion) {
        
        room.idHospedaje = this.currentUser.idHospedaje;
        room.idUsuario = this.currentUser.idUsuario;
        return this.http.post(_config + '/api/habitaciones/', room, this.jwt()).map((response: Response) => response.json());
    }

    // update(room: Habitacion) {
    //     return this.http.put(_config + '/api/rooms/' + room.idHabitacion, room, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(room: Habitacion) {
    //     return this.http.delete(_config + '/api/rooms/' + room.idHabitacion, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {

        if (this.currentUser && this.currentUser.token) {
            let headers = new Headers({ 'x-access-token': this.currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}