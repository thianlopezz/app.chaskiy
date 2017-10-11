import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService,
          PaisService, RegisterService,
          MessageService} from '../_services/index';

declare var jQuery:any;

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  model: any = {};
  valid_pass;
  valid_pass0;

  loading;

  constructor(private router: Router,
              private registerService: RegisterService,
              private messService: MessageService) { }

  ngOnInit() {
  }

  guardar(form: NgForm){

    if(this.model.password != this.model.password0){

      this.valid_pass = true;
      return;
    }

    if(this.model.password.length < 6){

      this.valid_pass0 = true;
      return;
    }

    this.valid_pass = false;
    this.valid_pass0 = false;

    this.loading = true;

    this.registerService.password(this.model)
        .subscribe(
            data => {

                if(data.success){

                  this.loading = false;
                  this.messService.success(data.mensaje);
                  this.showMess();

                  setTimeout(() => {

                    this.router.navigate(['/home']);
                  }, 900);
                }
                else{

                  this.loading = false;
                  this.messService.error(data.mensaje);
                  this.showMess();
                }
            },
            error => {

                console.log(error);
                this.loading = false;

                this.messService.error(error);
                this.showMess();
            });
  }

  private showMess(){

      setTimeout(() => {

        jQuery("#messModal").modal("show");
      }, 200);
  }

  valuechange_pass(newVal){

    if(this.model.password != this.model.password0)
        this.valid_pass = true;
    else{

      this.valid_pass = false;

      if(this.model.password.length < 6)
        this.valid_pass0 = true;
      else
        this.valid_pass0 = false;

    }

  }

}
