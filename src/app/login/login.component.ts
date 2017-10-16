import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

declare var jQuery: any;

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    error: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        jQuery('#wrapper').removeClass('toggled');
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(
                data => {

                    if (data.success) {

                      this.router.navigate(['/home']);
                    } else {

                      this.error = {error: true, mensaje: data.mensaje};
                      this.loading = false;
                    }
                },
                error => {

                    this.error = {error: true, mensaje: error};
                    this.loading = false;
                });
    }
}