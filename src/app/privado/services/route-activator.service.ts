import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../../publico/services/autenticacion.service';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class RouteActivatorService implements CanActivate {

  constructor(private router: Router,
    private autenticacionService: AutenticacionService) { }

  canActivate() {

    if (!this.autenticacionService.isTokenExpired()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


}
