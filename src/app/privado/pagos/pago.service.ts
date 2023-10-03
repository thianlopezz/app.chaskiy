import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class PagoService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get(idReserva: string) {
    return this.http.get(this.url.getBaseURL() + '/pago/all/' + idReserva, this.jwt());
  }

  getByRango(feDesde: Date, feHasta: Date) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post(
      this.url.getBaseURL() + '/pago/rango/',
      { feDesde, feHasta, idHospedaje: chasker.idHospedaje },
      this.jwt()
    );
  }

  mantenimiento(pago: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    pago.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/pago', pago, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
