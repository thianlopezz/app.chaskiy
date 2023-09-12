import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TarifaService {
  constructor(private http: HttpClient) {}

  getAll() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/tarifa/all/' + chasker.idHospedaje, this.jwt());
  }

  getAllTipos() {
    return this.http.get('/api/tarifa/alltipos/', this.jwt());
  }

  mantenimiento(tarifa) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    tarifa.idHospedaje = chasker.idHospedaje;
    tarifa.idUsuario = chasker.idUsuario;
    return this.http.post('/api/tarifa/', tarifa, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
