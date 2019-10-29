import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CamaService {
  constructor(private http: Http) {}

  get() {
    return this.http.get('/api/camas/', this.jwt()).pipe(map((response: Response) => response.json()));
  }

  // NOT IMPLEMENTED
  getById(idHabitacion) {
    // const chasker = JSON.parse(localStorage.getItem('chasker'));
    // return this.http
    //   .get(`/api/habitaciones/${chasker.idHospedaje}/${idHabitacion}`, this.jwt())
    //   .pipe(map((response: Response) => response.json()));
  }

  // NOT IMPLEMENTED
  mantenimiento(room: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    // room.idHospedaje = chasker.idHospedaje;
    // room.idUsuario = chasker.idUsuario;
    // return this.http.post('/api/habitaciones/', room, this.jwt()).pipe(map((response: Response) => response.json()));
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new Headers({ 'x-access-token': chasker.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
