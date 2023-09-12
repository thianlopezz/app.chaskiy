import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EstadisticaService {
  constructor(private http: HttpClient) {}

  getMonthIcom(feDesde: string, feHasta: string) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post('/api/statistic/pagos', { feDesde, feHasta, idHospedaje: chasker.idHospedaje }, this.jwt());
  }

  getOcupacionPorRango(feDesde: string, feHasta: string) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post(
      '/api/statistic/ocupacion',
      { feDesde, feHasta, idHospedaje: chasker.idHospedaje },
      this.jwt()
    );
  }

  getCaptacion() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/statistic/captacion/' + chasker.idHospedaje, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
