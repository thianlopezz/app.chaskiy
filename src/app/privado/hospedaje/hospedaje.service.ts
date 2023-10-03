import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class HospedajeService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get(this.url.getBaseURL() + '/hospedaje/all/' + chasker.idHospedaje, this.jwt());
  }

  mantenimiento(registro: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    registro.idHospedaje = chasker.idHospedaje;
    registro.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/hospedaje/', registro, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
