import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import * as jwt_decode from 'jwt-decode';
export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AutenticacionService {
  constructor(private http: Http) {}

  login(user: any) {
    user.username = user.username.trim();
    user.password = user.password.trim();

    return this.http.post('/api/auth/login/', user).pipe(
      map((response: Response) => {
        const _response = response.json();

        if (_response.success) {
          const _user = _response.usuario;
          if (_user && _user.token) {
            localStorage.setItem('chasker', JSON.stringify(_user));
            return _response;
          }
        } else {
          return _response;
        }
      })
    );
  }

  getLogin() {
    const chasker = JSON.parse(localStorage.getItem('chasker'));
    if (chasker && chasker.rol === 'AD') {
      chasker.routes = this.getAdminRoutes();
    } else if (chasker && chasker.rol === 'REC') {
      chasker.routes = this.getRecepcionistaRoutes();
    }
    return chasker;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('chasker');
  }

  isTokenExpired(token?: string): boolean {
    if (!this.getLogin()) {
      return true;
    }
    if (!token) {
      token = this.getLogin().token;
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  private getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  private getAdminRoutes() {
    return [
      { route: 'dashboard', text: 'Dashboard' },
      { route: 'reservas', text: 'Reservas' },
      { route: 'pagos', text: 'Pagos' },
      { route: 'habitaciones', text: 'Habitaciones' },
      { route: 'pasajeros', text: 'Pasajeros' },
      { route: 'analytics', text: 'Analíticas' },
      { route: 'hospedaje', text: 'Hospedaje' },
      { route: 'configuracion', text: 'Configuración' },
      { route: 'marcar', text: 'Marcar' },
      { route: 'contrasena', text: 'Cambiar contrasena', hidden: true }
    ];
  }

  private getRecepcionistaRoutes() {
    return [
      { route: 'dashboard', text: 'Dashboard' },
      { route: 'reservas', text: 'Reservas' },
      { route: 'pasajeros', text: 'Pasajeros' },
      { route: 'marcar', text: 'Marcar' },
      { route: 'contrasena', text: 'Cambiar contrasena', hidden: true }
    ];
  }
}
