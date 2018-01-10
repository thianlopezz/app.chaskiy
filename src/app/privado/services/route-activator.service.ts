import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../../publico/services/autenticacion.service';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { error } from 'selenium-webdriver';

@Injectable()
export class RouteActivatorService implements CanActivate {

  constructor(private router: Router,
    private autenticacionService: AutenticacionService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const isLogged = this.getIsLogged();
    console.log('Valor>>' + isLogged);
    return !!isLogged;
  }

  getIsLogged() {

    this.autenticacionService.isLogged().subscribe(
      response => {
        if (!response.success) {
          this.router.navigate(['/404']);
        } else {
          return true;
        }
      },
      error => {
        this.router.navigate(['/404']);
      });
  }

}
