import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Passenger, pathApi } from '../_models/index';

const _config = pathApi.path;

@Injectable()
export class PassengerService {

    currentUser: any;
    
    constructor(private http: Http) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }

    getById(id: string) {
        
        var param = encodeURIComponent('<params accion="C1" identificacion = "'+ id +'" idHospedaje = "'+ this.currentUser.idHospedaje +'" />');
        return this.http.get('/api/pasajeros/all/' + param, this.jwt()).map((response: Response) => response.json());
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

        if (this.currentUser && this.currentUser.token) {
            let headers = new Headers({ 'x-access-token': this.currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}