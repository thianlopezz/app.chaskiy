import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PasajeroService {
  constructor(private http: HttpClient) {}

  getAll() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/pasajeros/all/' + chasker.idHospedaje, this.jwt());
  }

  getByCorreo(correo: string) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/pasajeros/correo/' + correo + '/' + chasker.idHospedaje, this.jwt());
  }

  mantenimiento(pass) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    pass.idHospedaje = chasker.idHospedaje;
    pass.idUsuario = chasker.idUsuario;

    return this.http.post('/api/pasajeros/', pass, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
