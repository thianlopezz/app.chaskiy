import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Reserve, CurrentMonth, pathApi } from '../_models/index';

const _config = pathApi.path;

@Injectable()
export class ReserveService {

    currentUser: any;
    
    constructor(private http: Http) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }

    getById(id: number) {

        var param = encodeURIComponent('<params accion = "C1" idReserva= "'+ id +'" idHospedaje="'+ this.currentUser.idHospedaje +'" />');
        return this.http.get('/api/reservas/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getByDate(current: CurrentMonth) {
        
        var feDesde = '01' + '/' + (current.noMonth + 1) + '/' + current.anio;
        var feHasta = current.finMes + '/' + (current.noMonth + 1) + '/' + current.anio;

        var param = encodeURIComponent('<params accion = "C" feDesde= "'+ feDesde +'" feHasta= "'+ feHasta 
                                            +'" idHospedaje= "'+ this.currentUser.idHospedaje +'" />');

        return this.http.get(_config + '/api/reservas/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(reserve: Reserve) {
        
        reserve.idHospedaje = this.currentUser.idHospedaje;
        reserve.idUsuario = this.currentUser.idUsuario;
        return this.http.post(_config + '/api/reservas', reserve, this.jwt()).map((response: Response) => response.json());
    }

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