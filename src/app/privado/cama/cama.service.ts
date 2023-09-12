import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CamaService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('/api/camas/', this.jwt());
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
    // return this.http.post('/api/habitaciones/', room, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
