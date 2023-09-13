import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class RegistroService {
  constructor(private http: HttpClient, private url: UrlService) {}

  registro(registro: any) {
    return this.http.post(this.url.getBaseURL() + '/api/register/', registro, this.jwt());
  }

  isRegister(registro: any) {
    return this.http.post(this.url.getBaseURL() + '/api/register/isregister', registro, this.jwt());
  }

  password(model: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    model.idUsuario = chasker.idUsuario;

    return this.http.post(this.url.getBaseURL() + '/api/register/password', model, this.jwt());
  }

  enviaRecupera(correo: any) {
    return this.http.post(this.url.getBaseURL() + '/api/register/enviarecupera', correo, this.jwt());
  }

  upRecupera(registro) {
    return this.http.post(this.url.getBaseURL() + '/api/register/uprecupera', registro, this.jwt());
  }

  activa(token) {
    return this.http.post(this.url.getBaseURL() + '/api/register/activa', { token: token }, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
