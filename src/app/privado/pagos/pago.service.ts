import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PagoService {

    constructor(private http: Http) { }

    getAll(idReserva: string) {

        const param = encodeURIComponent('<params accion="C" idReserva="' + idReserva + '" />');
        return this.http.get('/api/pago/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getByDate(feDesde: string, feHasta: string) {

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      const param = encodeURIComponent('<params accion="C0"'
                                    + ' idHospedaje = "' + currentUser.idHospedaje
                                    + '" feDesde = "' + feDesde
                                    + '" feHasta = "' + feHasta
                                    + '" />');

      return this.http.get('/api/pago/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pago: any) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        pago.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/pago', pago, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
