import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class AdicionalService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get(this.url.getBaseURL() + '/adicionales/all/' + chasker.idHospedaje, this.jwt());
  }

  mantenimiento(adicional: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    adicional.idHospedaje = chasker.idHospedaje;
    adicional.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/adicionales/', adicional, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
