import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PagoService {

    constructor(private http: Http) { }

    get(idReserva: string) {

        return this.http.get('/api/pago/all/' + idReserva, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    getByRango(feDesde: Date, feHasta: Date) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.post('/api/pago/rango/', { feDesde, feHasta, idHospedaje: chasker.idHospedaje }, this.jwt())
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
