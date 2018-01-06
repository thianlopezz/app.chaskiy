import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AutenticacionService } from './publico/services/autenticacion.service';
import { GoogleAnalyticsEventsService } from './privado/services/google-analytics-events.service';

declare const ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // tslint:disable-next-line:indent
  currentUser: any;

  constructor(private autenticacionService: AutenticacionService,
              public router: Router,
              public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {

    this.currentUser = this.autenticacionService.getLogin();
  }

  isLogged() {

    this.currentUser = this.autenticacionService.getLogin();
    return this.autenticacionService.isLoLogged();
  }

}

