import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

// TODO: IMPLEMENTAR MANTENIMIENTO
@Injectable({
  providedIn: 'root'
})
export class TipoHabitacionService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    return this.http.get(this.url.getBaseURL() + '/habitaciones/tipo/', this.jwt());
  }

  getById(idHabitacion) {
    // const chasker = JSON.parse(localStorage.getItem('chasker'));
    // return this.http
    //   .get(`/api/habitaciones/${chasker.idHospedaje}/${idHabitacion}`, this.jwt())
    //   ;
  }

  mantenimiento(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    // room.idHospedaje = chasker.idHospedaje;
    // room.idUsuario = chasker.idUsuario;
    // return this.http.post(this.url.getBaseURL() + '/habitaciones/', room, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
