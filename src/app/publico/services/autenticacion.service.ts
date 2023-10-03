import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import * as jwt_decode from 'jwt-decode';
import { UrlService } from '../../compartido/services/url.service';
export const TOKEN_NAME = 'jwt_token';

@Injectable()
export class AutenticacionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private url: UrlService) {}

  login(user: any): Observable<any> {
    user.username = user.username.trim();
    user.password = user.password.trim();

    console.log(this.url.getBaseURL());
    debugger;

    return this.http.post<any>(this.url.getBaseURL() + '/auth/login/', user, this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
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
      { route: 'galeria', text: 'Galería' },
      { route: 'configuracion', text: 'Configuración' },
      { route: 'marcar', text: 'Marcar' },
      { route: 'agencias', text: 'Agencia' },
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

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
