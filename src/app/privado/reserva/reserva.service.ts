import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ReservaService {

  constructor(private http: Http) { }

  getById(id: number) {

    const chasker = JSON.parse(localStorage.getItem('chasker'));
    const param = encodeURIComponent('<params accion = "C1" idreserva= "' + id
      + '" idhospedaje="' + chasker.idhospedaje + '" />');
    return this.http.get('/api/reservas/' + param, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  getByIdEx(id: number, token: string) {

    return this.http.get('/api/reservas/ex/' + id + '/' + token, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  confirmaReserva(id: number) {

    return this.http.get('/api/reservas/confirma/' + id, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  getByDate(consulta: string, feDesde: string, fehasta: string) {
    // DD/MM/AAAA
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    const param = encodeURIComponent('<params accion = "' + consulta + '" fedesde= "' + feDesde + '" fehasta= "' + fehasta
      + '" idhospedaje= "' + chasker.idhospedaje + '" />');

    return this.http.get('/api/reservas/all/' + param, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  mantenimiento(reserve: any) {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    reserve.idhospedaje = chasker.idhospedaje;
    reserve.idusuario = chasker.idusuario;

    if (reserve.estado === 'Co') {

      const today = new Date();
      reserve.fehasta = new Date(
        new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24)
      );
    }

    return this.http.post('/api/reservas', reserve, this.jwt())
      .pipe(map((response: Response) => response.json()));
  }

  getEstado(reserva: any) {

    if (reserva.estado === 'Ca') {
      return 'Cancelada';
    } else if (reserva.estado === 'Ci') {
      return 'Checked-in';
    } else if (reserva.estado === 'Co') {
      return 'Checked-out';
    } else if (reserva.estado === 'Re') {
      return 'Reservada';
    } else if (reserva.estado === 'Pr') {
      return 'Proforma';
    } else {
      return 'N/A';
    }
  }

  getNumeroNoches(fedesde: Date, fehasta: Date) {

    let diaDesde = fedesde.getDate();
    const mesDesde = fedesde.getMonth();
    const anioDesde = fedesde.getFullYear();

    fehasta = new Date(fehasta.getFullYear(), fehasta.getMonth(), fehasta.getDate(), 0, 0, 0, 0);
    fedesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);

    let cont = 0;

    if (fedesde.getTime() > fehasta.getTime()) {
      return 0;
    } else {

      while (fedesde.getTime() !== fehasta.getTime()) {

        diaDesde++;
        fedesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);
        cont++;
      }

      return cont + 1;
    }
  }

  private jwt() {

    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new Headers({ 'x-access-token': chasker.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
