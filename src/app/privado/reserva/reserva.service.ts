import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../compartido/services/url.service';

@Injectable()
export class ReservaService {
  @Output() hasRefetchDetalleReserva = new EventEmitter<any>();

  constructor(private http: HttpClient, private url: UrlService) {}

  getById(id: number) {
    return this.http.get(this.url.getBaseURL() + '/reservas/' + id, this.jwt());
  }

  getByDate(consulta: string, feDesde: Date, feHasta: Date) {
    // DD/MM/AAAA
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    return this.http.post(
      this.url.getBaseURL() + '/reservas/all/' + consulta,
      { feDesde, feHasta, idHospedaje: chasker.idHospedaje },
      this.jwt()
    );
  }

  mantenimiento(reserve: any) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    reserve.idHospedaje = chasker.idHospedaje;
    reserve.idUsuario = chasker.idUsuario;

    if (reserve.estado === 'Co') {
      const today = new Date();
      reserve.feHasta = new Date(
        new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).getTime() - 1000 * 60 * 60 * 24
      );
    }

    return this.http.post(this.url.getBaseURL() + '/reservas', reserve, this.jwt());
  }

  cambiaEstado(reserva) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    reserva.idUsuario = chasker.idUsuario;

    return this.http.post(this.url.getBaseURL() + '/reservas/estado/', reserva, this.jwt());
  }

  getByIdEx(id: number, token: string) {
    return this.http.get(this.url.getBaseURL() + '/reservas/ex/' + id + '/' + token, this.jwt());
  }

  confirmaReserva(id: number) {
    return this.http.get(this.url.getBaseURL() + '/reservas/confirma/' + id, this.jwt());
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

    if (feDesde.getTime() > feHasta.getTime()) {
      return 0;
    } else {
      while (feDesde.getTime() !== feHasta.getTime()) {
        diaDesde++;
        feDesde = new Date(anioDesde, mesDesde, diaDesde, 0, 0, 0, 0);
        cont++;
      }

      return cont + 1;
    }
  }

  // modificacion de campos individuales
  modificarCamposIndividuales(reserva) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    reserva.idUsuario = chasker.idUsuario;

    return this.http.post(this.url.getBaseURL() + '/reservas/individuales/', reserva, this.jwt());
  }

  // notas
  addUpdateNotas(notas) {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    notas.idUsuario = chasker.idUsuario;

    return this.http.post(this.url.getBaseURL() + '/reservas/notas/', notas, this.jwt());
  }

  onHasRefetchDetalleReserva(idReserva) {
    this.hasRefetchDetalleReserva.emit(idReserva);
  }

  private jwt() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));

    if (chasker && chasker.token) {
      const headers = new HttpHeaders({ 'x-access-token': chasker.token });
      return { headers: headers };
    }
  }
}
