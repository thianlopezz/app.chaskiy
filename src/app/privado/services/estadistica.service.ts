import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EstadisticaService {

    constructor(private http: Http) { }

    getMonthIcom(feDesde: string, feHasta: string) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.post('/api/statistic/pagos', { feDesde, feHasta, idHospedaje: chasker.idHospedaje }, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    getOcupacionPorRango(feDesde: string, feHasta: string) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.post('/api/statistic/ocupacion', { feDesde, feHasta, idHospedaje: chasker.idHospedaje }, this.jwt())
            .pipe(map((response: Response) => response.json()));
    }

    getCaptacion() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        return this.http.get('/api/statistic/captacion/' + chasker.idHospedaje, this.jwt())
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
