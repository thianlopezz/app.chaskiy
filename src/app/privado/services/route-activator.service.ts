import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacionService } from '../../publico/services/autenticacion.service';

@Injectable()
export class RouteActivatorService {
  constructor(private router: Router, private autenticacionService: AutenticacionService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.autenticacionService.isTokenExpired()) {
      const chasker = this.autenticacionService.getLogin();
      const index = chasker.routes.findIndex(x => state.url.includes(x.route));
      if (index !== -1) {
        return true;
      }

      this.router.navigate(['/404']);
      return false;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
