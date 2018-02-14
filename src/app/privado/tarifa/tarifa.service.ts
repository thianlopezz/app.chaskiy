import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class TarifaService {

  constructor(private http: Http) { }

  getAll() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const param = encodeURIComponent('<params accion="C0" idhospedaje = "' + chasker.idhospedaje + '" />');
    return this.http.get('/api/tarifa/all/' + param, this.jwt()).map((response: Response) => response.json());
  }

  // getAllAgrupados() {

  //   const chasker = JSON.parse(localStorage.getItem('chasker'));

  //   const param = encodeURIComponent('<params accion="C0" idHospedaje = "' + chasker.idHospedaje + '" />');
  //   return this.http.get('/api/tarifa/agrupado/' + param, this.jwt()).map((response: Response) => response.json());
  // }

  getAllTipos() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.get('/api/tarifa/alltipos/', this.jwt()).map((response: Response) => response.json());
  }

  mantenimiento(tarifa) {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    tarifa.idhospedaje = chasker.idhospedaje;
    tarifa.idhsuario = chasker.idusuario;
    return this.http.post('/api/tarifa/', tarifa, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new Headers({ 'x-access-token': chasker.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
