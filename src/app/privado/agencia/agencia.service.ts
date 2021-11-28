import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  constructor(private http: HttpClient) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/agencia/' + chasker.idHospedaje, this.jwt());
  }

  mantenimiento(adicional: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    adicional.idHospedaje = chasker.idHospedaje;
    adicional.idUsuario = chasker.idUsuario;
    return this.http.post('/api/agencia/', adicional, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = { 'x-access-token': chasker.token };
      return { headers: headers };
    }
  }
}
