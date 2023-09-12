import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class NotificacionService {
  constructor(private http: HttpClient) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const param = encodeURIComponent('<params accion="C" idUsuario = "' + chasker.idUsuario + '" />');
    return this.http.get('/api/notificacion/all/' + param, this.jwt());
  }

  setLeido(idnotificacion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post('/api/notificacion/leido/' + idnotificacion, {}, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
