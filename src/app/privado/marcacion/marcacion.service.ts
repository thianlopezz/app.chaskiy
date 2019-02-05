import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarcacionService {
  constructor(private http: Http) {}

  getAll() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .get('/api/marcacion/all/' + chasker.idHospedaje, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  marcar(marca) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    marca.idHospedaje = chasker.idHospedaje;
    marca.idUsuario = chasker.idUsuario;
    return this.http
      .post('/api/marcacion/', marca, this.jwt())
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
