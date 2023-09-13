import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class HabitacionService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.get(this.url.getBaseURL() + '/api/habitaciones/all/' + chasker.idHospedaje, this.jwt());
  }

  getById(idHabitacion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.get(`/api/habitaciones/${chasker.idHospedaje}/${idHabitacion}`, this.jwt());
  }

  featureFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.put(`/api/habitaciones/foto/feature/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt());
  }

  deleteFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.post(`/api/habitaciones/foto/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt());
  }

  getFotos(idHabitacion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.get(`/api/habitaciones/foto/${chasker.idHospedaje}/${idHabitacion}`, this.jwt());
  }

  addImages(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http.post(`/api/habitaciones/foto`, params, this.jwt());
  }

  addEspecificacion(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http.post(`/api/habitaciones/especificacion`, params, this.jwt());
  }

  addCama(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    params = { ...params, idHospedaje: chasker.idHospedaje, idUsuario: chasker.idUsuario };
    return this.http.post(`/api/habitaciones/cama`, params, this.jwt());
  }

  deleteEspecificacion(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.post(
      `/api/habitaciones/especificacion/delete/`,
      { ...params, idUsuario: chasker.idUsuario },
      this.jwt()
    );
  }

  deleteCama(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.post(`/api/habitaciones/cama/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt());
  }

  mantenimiento(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    room.idHospedaje = chasker.idHospedaje;
    room.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/api/habitaciones/', room, this.jwt());
  }

  saveTipoHabitacion(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    room.idHospedaje = chasker.idHospedaje;
    room.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/api/habitaciones/tipo', room, this.jwt());
  }

  saveTarifa(params: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    params.idHospedaje = chasker.idHospedaje;
    params.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/api/habitaciones/tarifa', params, this.jwt());
  }

  saveCapacidad(params: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    params.idHospedaje = chasker.idHospedaje;
    params.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/api/habitaciones/capacidad', params, this.jwt());
  }

  saveDescripcionTipoHabitacion(params: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    params.idHospedaje = chasker.idHospedaje;
    params.idUsuario = chasker.idUsuario;
    return this.http.post(this.url.getBaseURL() + '/api/habitaciones/descripcion/tipohabitacion', params, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
