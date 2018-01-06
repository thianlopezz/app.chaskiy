import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class EstadisticaService {

    constructor(private http: Http) { }

    getMonthIcom(feDesde: string, feHasta: string) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const param = encodeURIComponent('<params accion="C1"'
                                        + ' idHospedaje = "' + currentUser.idHospedaje
                                        + '" feDesde = "' + feDesde
                                        + '" feHasta = "' + feHasta
                                        + '" />');

        return this.http.get('/api/statistic/' + param, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
