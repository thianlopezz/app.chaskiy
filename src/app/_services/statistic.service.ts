import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class StatisticService {

    constructor(private http: Http) { }

    getMonthIcom(feDesde: string, feHasta: string) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        var param = encodeURIComponent('<params accion="C1"'
                                        +' idHospedaje = "'+ currentUser.idHospedaje
                                        +'" feDesde = "'+ feDesde
                                        +'" feHasta = "'+ feHasta
                                        +'" />');

        return this.http.get('/api/statistic/'+ param, this.jwt()).map((response: Response) => response.json());
    }

    // getById(id: string) {
    //     return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    // }

    // mantenimiento(room: Habitacion) {
    //
    //     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //
    //     room.idHospedaje = currentUser.idHospedaje;
    //     room.idUsuario = currentUser.idUsuario;
    //     return this.http.post('/api/habitaciones/', room, this.jwt()).map((response: Response) => response.json());
    // }

    // update(room: Habitacion) {
    //     return this.http.put(_config + '/api/rooms/' + room.idHabitacion, room, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(room: Habitacion) {
    //     return this.http.delete(_config + '/api/rooms/' + room.idHabitacion, this.jwt()).map((response: Response) => response.json());
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
