import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AuthenticationService, GoogleAnalyticsEventsService } from './_services/index';

declare const ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	// tslint:disable-next-line:indent
	currentUser: any;

  constructor(private authService: AuthenticationService,
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

    this.currentUser = this.authService.getLogin();
  }

  isLogged() {

    this.currentUser = this.authService.getLogin();
    return this.authService.isLoLogged();
  }

}
