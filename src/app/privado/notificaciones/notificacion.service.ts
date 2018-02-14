import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class NotificacionService {

  constructor(private http: Http) { }

  get() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const param = encodeURIComponent('<params accion="C" idUsuario = "' + chasker.idUsuario + '" />');
    return this.http.get('/api/notificacion/all/' + param, this.jwt()).map((response: Response) => response.json());
  }

  setLeido(idnotificacion) {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post('/api/notificacion/leido/' + idnotificacion, {}, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new Headers({ 'x-access-token': chasker.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
