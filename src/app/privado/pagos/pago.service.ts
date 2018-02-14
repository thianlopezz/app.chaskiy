import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PagoService {

    constructor(private http: Http) { }

    getAll(idreserva: string) {

        const param = encodeURIComponent('<params accion="C" idreserva="' + idreserva + '" />');
        return this.http.get('/api/pago/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getByDate(fedesde: string, fehasta: string) {

      const chasker = JSON.parse(localStorage.getItem('chasker'));

      const param = encodeURIComponent('<params accion="C0"'
                                    + ' idhospedaje = "' + chasker.idhospedaje
                                    + '" fedesde = "' + fedesde
                                    + '" fehasta = "' + fehasta
                                    + '" />');

      return this.http.get('/api/pago/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(pago: any) {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        pago.idusuario = chasker.idusuario;
        return this.http.post('/api/pago', pago, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {

        const chasker = JSON.parse(localStorage.getItem('chasker'));

        if (chasker && chasker.token) {
            const headers = new Headers({ 'x-access-token': chasker.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
