import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class TarifaService {

  constructor(private http: Http) { }

  getAll() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const param = encodeURIComponent('<params accion="C0" idHospedaje = "' + currentUser.idHospedaje + '" />');
    return this.http.get('/api/tarifa/all/' + param, this.jwt()).map((response: Response) => response.json());
  }

  // getAllAgrupados() {

  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  //   const param = encodeURIComponent('<params accion="C0" idHospedaje = "' + currentUser.idHospedaje + '" />');
  //   return this.http.get('/api/tarifa/agrupado/' + param, this.jwt()).map((response: Response) => response.json());
  // }

  getAllTipos() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    return this.http.get('/api/tarifa/alltipos/', this.jwt()).map((response: Response) => response.json());
  }

  mantenimiento(tarifa) {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    tarifa.idHospedaje = currentUser.idHospedaje;
    tarifa.idUsuario = currentUser.idUsuario;
    return this.http.post('/api/tarifa/', tarifa, this.jwt()).map((response: Response) => response.json());
  }

  private jwt() {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'x-access-token': currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
