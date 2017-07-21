import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	currentUser: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  	this.currentUser = this.authService.getLogin();
  }

  isLogged(){

    this.currentUser = this.authService.getLogin();
  	return this.authService.isLoLogged();
  }

}
