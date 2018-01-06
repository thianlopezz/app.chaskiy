import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ReservaService {

    constructor(private http: Http) { }

    getById(id: number) {

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const param = encodeURIComponent('<params accion = "C1" idReserva= "' + id
                                        + '" idHospedaje="' + currentUser.idHospedaje + '" />');
      return this.http.get('/api/reservas/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getByIdEx(id: number, token: string) {

      return this.http.get('/api/reservas/ex/' + id + '/' + token, this.jwt()).map((response: Response) => response.json());
    }

    confirmaReserva(id: number) {

      return this.http.get('/api/reservas/confirma/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getByDate(consulta: string, feDesde: string, feHasta: string) {
      // DD/MM/AAAA

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        const param = encodeURIComponent('<params accion = "' + consulta + '" feDesde= "' + feDesde + '" feHasta= "' + feHasta
                                            + '" idHospedaje= "' + currentUser.idHospedaje + '" />');

        return this.http.get('/api/reservas/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(reserve: any) {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        reserve.idHospedaje = currentUser.idHospedaje;
        reserve.idUsuario = currentUser.idUsuario;

        if (reserve.estado === 'Co') {

          const today = new Date();
          reserve.feHasta = new Date(
            new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime() - (1000 * 60 * 60 * 24)
          );
        }

        return this.http.post('/api/reservas', reserve, this.jwt()).map((response: Response) => response.json());
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

    getNumeroNoches(feDesde: Date, feHasta: Date) {

        let diaDesde = feDesde.getDate();
        const mesDesde = feDesde.getMonth();
        const anioDesde = feDesde.getFullYear();

        feHasta = new Date(feHasta.getFullYear(), feHasta.getMonth(), feHasta.getDate(), 0, 0, 0, 0);
        feDesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);

        let cont = 0;

        if (feDesde > feHasta) {
          return 0;
        } else {

          while (feDesde.getTime() !== feHasta.getTime()) {

            diaDesde++;
            feDesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);
            cont ++;
          }

          return cont + 1;
        }
    }

    private jwt() {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
