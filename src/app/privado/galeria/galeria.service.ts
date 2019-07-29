import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  constructor(private http: Http) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .get('/api/galeria/' + chasker.idHospedaje, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  public uploadImage(image: File, descripcion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const formData = new FormData();

    formData.append('file', image);
    formData.append('idHospedaje', chasker.idHospedaje);

    if (descripcion) {
      formData.append('descripcion', descripcion);
    }

    return this.http
      .post('/api/galeria/upload', formData, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  deleteFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http
      .post(`/api/galeria/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt())
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