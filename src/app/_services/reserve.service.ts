import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Reserve, CurrentMonth } from '../_models/index';

@Injectable()
export class ReserveService {

    constructor(private http: Http) { }

    // getAll() {
    //     return this.http.get(_config + '/api/rooms', this.jwt()).map((response: Response) => response.json());
    // }

    getById(id: number) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        var param = encodeURIComponent('<params accion = "C1" idReserva= "'+ id +'" idHospedaje="'+ currentUser.idHospedaje +'" />');
        return this.http.get('/api/reservas/' + param, this.jwt()).map((response: Response) => response.json());
    }

    getByDate(consulta: string, feDesde: string, feHasta: string) { //DD/MM/AAAA Y DD/MM/AAAA

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        var param = encodeURIComponent('<params accion = "'+ consulta +'" feDesde= "'+ feDesde +'" feHasta= "'+ feHasta
                                            +'" idHospedaje= "'+ currentUser.idHospedaje +'" />');

        return this.http.get('/api/reservas/all/' + param, this.jwt()).map((response: Response) => response.json());
    }

    mantenimiento(reserve: Reserve) {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        reserve.idHospedaje = currentUser.idHospedaje;
        reserve.idUsuario = currentUser.idUsuario;
        return this.http.post('/api/reservas', reserve, this.jwt()).map((response: Response) => response.json());
    }

    getEstado(reserva: any){

        if(reserva.estado == 'Ca')
            return "Cancelada";
        else
          if(reserva.estado == 'Ci')
            return "Checked-in";
          else
            if(reserva.estado == 'Co')
              return "Checked-out";
            else
              if(reserva.estado == 'Re')
                return "Reservada";
              else
                if(reserva.estado == 'Pr')
                  return "Proforma";
                else
                  return "N/A";
    }

    getNights(feDesde: Date, feHasta: Date){

        var diaDesde = feDesde.getDate();
        var mesDesde = feDesde.getMonth();
        var anioDesde = feDesde.getFullYear();

        feHasta = new Date(feHasta.getFullYear(), feHasta.getMonth(), feHasta.getDate(), 0, 0, 0, 0);
        feDesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);

        var cont = 0;

        if(feDesde > feHasta)
          return 0;
        else{


          while(feDesde.getTime() != feHasta.getTime()){

            diaDesde++;
            feDesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);
            cont ++;
          }

          return cont + 1;
        }
    }

    // update(room: Room) {
    //     return this.http.put(_config + '/api/rooms/' + room._id, room, this.jwt()).map((response: Response) => response.json());
    // }

    // delete(room: Room) {
    //     return this.http.delete(_config + '/api/rooms/' + room._id, this.jwt()).map((response: Response) => response.json());
    // }

    // private helper methods

    private jwt() {

        var currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'x-access-token': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
