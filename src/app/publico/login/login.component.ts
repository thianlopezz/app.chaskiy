import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import * as md5 from 'md5';

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
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit() {
    if (this.autenticacionService.getLogin()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.loading = true;
    this.autenticacionService.login({ username: this.model.username, password: md5(this.model.password) }).subscribe(
      (response: any) => {
        // const _response = response.json();

        if (response.success) {
          const _user = response.usuario;
          if (_user && _user.token) {
            localStorage.setItem('chasker', JSON.stringify(_user));
            this.router.navigate(['/dashboard']);
          }
        } else {
          this.error = { error: true, mensaje: response.mensaje };
          this.loading = false;
        }
      },
      error => {
        this.error = { error: true, mensaje: error };
        this.loading = false;
      }
    );
  }
}
