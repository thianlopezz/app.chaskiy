import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { UrlService } from '../../compartido/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get(this.url.getBaseURL() + '/agencia/' + chasker.idHospedaje, this.jwt());
  }

  mantenimiento(adicional: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    adicional.idHospedaje = chasker.idHospedaje;
    adicional.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/agencia/', adicional, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = { 'x-access-token': chasker.token };
      return { headers: headers };
    }
  }
}
