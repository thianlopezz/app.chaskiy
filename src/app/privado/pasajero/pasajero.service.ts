import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class PasajeroService {
  constructor(private http: HttpClient, private url: UrlService) {}

  getAll() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get(this.url.getBaseURL() + '/api/pasajeros/all/' + chasker.idHospedaje, this.jwt());
  }

  getByCorreo(correo: string) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get(
      this.url.getBaseURL() + '/api/pasajeros/correo/' + correo + '/' + chasker.idHospedaje,
      this.jwt()
    );
  }

  mantenimiento(pass) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    pass.idHospedaje = chasker.idHospedaje;
    pass.idUsuario = chasker.idUsuario;

    return this.http.post(this.url.getBaseURL() + '/api/pasajeros/', pass, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
