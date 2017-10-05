import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Adicional } from '../_models/index';

@Injectable()
export class RegisterService {

    constructor(private http: Http) { }

    registro(registro: any) {

        return this.http.post('/api/register/', registro, this.jwt()).map((response: Response) => response.json());
    }

    isRegister(registro: any) {

        return this.http.post('/api/register/isregister', registro, this.jwt()).map((response: Response) => response.json());
    }

    password(model: any){

      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      model.idUsuario = currentUser.idUsuario;

      return this.http.post('/api/register/password', model, this.jwt()).map((response: Response) => response.json());
    }

    activa(token) {

        return this.http.post('/api/register/activa', {token: token}, this.jwt()).map((response: Response) => response.json());
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

    // private helper methodsz

    private jwt() {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
