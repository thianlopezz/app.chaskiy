import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

declare var jQuery: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
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
        private autenticacionService: AutenticacionService) { }

    ngOnInit() {
        if (this.autenticacionService.getLogin()) {
            this.router.navigate(['/dashboard']);
        }
    }

    login() {
        this.loading = true;
        this.autenticacionService.login(this.model)
            .subscribe(
                data => {

                    if (data.success) {
                        this.router.navigate(['/dashboard']);
                    } else {

                        this.error = { error: true, mensaje: data.mensaje };
                        this.loading = false;
                    }
                },
                error => {

                    this.error = { error: true, mensaje: error };
                    this.loading = false;
                });
    }
}
