import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcacionService {
  constructor(private http: HttpClient) {}

  getAll() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.get('/api/marcacion/all/' + chasker.idHospedaje, this.jwt());
  }

  marcar(marca) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    marca.idHospedaje = chasker.idHospedaje;
    marca.idUsuario = chasker.idUsuario;
    return this.http.post('/api/marcacion/', marca, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
