import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Pais } from '../_models/index';

@Injectable()
export class PaisService {

    currentUser: any;
    
    constructor(private http: Http) { }

    getAll() {
        
        var param = encodeURIComponent('<params accion="C" />');
        return this.http.get('/api/paises/all/' + param, this.jwt()).map((response: Response) => response.json());
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