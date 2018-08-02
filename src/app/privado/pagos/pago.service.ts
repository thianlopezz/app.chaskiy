import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PagoService {

    constructor(private http: Http) { }

    getAll(idReserva: string) {

        const param = encodeURIComponent('<params accion="C" idReserva="' + idReserva + '" />');
        return this.http.get('/api/pago/all/' + param, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    getByDate(feDesde: string, feHasta: string) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        const param = encodeURIComponent('<params accion="C0"'
            + ' idHospedaje = "' + chasker.idHospedaje
            + '" feDesde = "' + feDesde
            + '" feHasta = "' + feHasta
            + '" />');

        return this.http.get('/api/pago/all/' + param, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    mantenimiento(pago: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        pago.idUsuario = chasker.idUsuario;
        return this.http.post('/api/pago', pago, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
