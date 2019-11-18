import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HabitacionService {
  constructor(private http: Http) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .get('/api/habitaciones/all/' + chasker.idHospedaje, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  getById(idHabitacion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .get(`/api/habitaciones/${chasker.idHospedaje}/${idHabitacion}`, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  featureFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .put(`/api/habitaciones/foto/feature/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  deleteFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .post(`/api/habitaciones/foto/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  getFotos(idHabitacion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .get(`/api/habitaciones/foto/${chasker.idHospedaje}/${idHabitacion}`, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  addImages(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http
      .post(`/api/habitaciones/foto`, params, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  addEspecificacion(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http
      .post(`/api/habitaciones/especificacion`, params, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  addCama(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http
      .post(`/api/habitaciones/cama`, params, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  deleteEspecificacion(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .post(`/api/habitaciones/especificacion/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  deleteCama(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .post(`/api/habitaciones/cama/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  mantenimiento(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    room.idHospedaje = chasker.idHospedaje;
    room.idUsuario = chasker.idUsuario;
    return this.http.post('/api/habitaciones/', room, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  saveTipoHabitacion(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    room.idHospedaje = chasker.idHospedaje;
    room.idUsuario = chasker.idUsuario;
    return this.http
      .post('/api/habitaciones/tipo', room, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  saveTarifa(params: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    params.idHospedaje = chasker.idHospedaje;
    params.idUsuario = chasker.idUsuario;
    return this.http
      .post('/api/habitaciones/tarifa', params, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  saveCapacidad(params: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    params.idHospedaje = chasker.idHospedaje;
    params.idUsuario = chasker.idUsuario;
    return this.http
      .post('/api/habitaciones/capacidad', params, this.jwt())
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
