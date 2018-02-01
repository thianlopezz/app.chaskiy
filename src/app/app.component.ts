import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AutenticacionService } from './publico/services/autenticacion.service';
import { GoogleAnalyticsEventsService } from './privado/services/google-analytics-events.service';

declare const ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {

  // tslint:disable-next-line:indent
  currentUser: any;

  constructor(private cdRef: ChangeDetectorRef,
    private autenticacionService: AutenticacionService,
    public router: Router,
    public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() { }

  ngAfterViewChecked() {
    this.currentUser = this.autenticacionService.getLogin();
    this.cdRef.detectChanges();
  }

  isLogged() {
    // if (this.autenticacionService.getLogin().token) {
    //   return true;
    // }
    // return false;
    // this.currentUser = this.autenticacionService.getLogin();
    return this.autenticacionService.getLogin();
  }

}

