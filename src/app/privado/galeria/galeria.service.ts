import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UrlService } from '../../compartido/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  constructor(private http: HttpClient, private url: UrlService) {}

  get() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.get(this.url.getBaseURL() + '/galeria/' + chasker.idHospedaje, this.jwt());
  }

  public uploadImages(images: FileList, descripcion) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const formData = new FormData();

    let maxLength = images.length > 10 ? 10 : images.length;
    for (let i = 0; i < maxLength; i++) {
      formData.append('files', images[i]);
    }

    formData.append('idHospedaje', chasker.idHospedaje);

    if (descripcion) {
      formData.append('descripcion', descripcion);
    }

    return this.http.post(this.url.getBaseURL() + '/galeria/upload', formData, this.jwt());
  }

  deleteFoto(params) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    return this.http.post(`/api/galeria/delete/`, { ...params, idUsuario: chasker.idUsuario }, this.jwt());
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
