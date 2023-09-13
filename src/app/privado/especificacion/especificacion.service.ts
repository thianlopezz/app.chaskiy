import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

// TODO: IMPLEMENTAR MANTENIMIENTO
@Injectable({
  providedIn: 'root'
})
export class EspecificacionService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    return this.http.get(this.url.getBaseURL() + '/api/especificaciones/', this.jwt());
  }

  // NOT IMPLEMENTED
  getById(idHabitacion) {
    // const chasker = JSON.parse(localStorage.getItem('chasker'));
    // return this.http
    //   .get(`/api/habitaciones/${chasker.idHospedaje}/${idHabitacion}`, this.jwt())
    //   ;
  }

  // NOT IMPLEMENTED
  mantenimiento(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    // room.idHospedaje = chasker.idHospedaje;
    // room.idUsuario = chasker.idUsuario;
    // return this.http.post(this.url.getBaseURL() + '/api/habitaciones/', room, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
