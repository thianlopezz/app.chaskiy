import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterService, MessageService } from '../_services/index';

declare var jQuery:any;

@Component({
  selector: 'app-up-password',
  templateUrl: './up-password.component.html',
  styleUrls: ['./up-password.component.css']
})
export class UpPasswordComponent implements OnInit {

  token;

  model: any = {};
  loading = false;

  valid_pass;
  valid_pass0;

  constructor(private route: ActivatedRoute,
              private registerService: RegisterService,
              private router: Router,
              private messService: MessageService) { }

  ngOnInit() {

    this.route
    .queryParams
    .subscribe(params => {

      this.token = params['token'];

      if(this.token == undefined)
        this.router.navigate(['/']);

      }, error=> {

        this.router.navigate(['/']);
      });
    }

    private showMess(){

      setTimeout(() => {

        jQuery("#messModal").modal("show");
      }, 200);
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

      this.model.tokenRecupera = this.token;

      this.registerService.upRecupera(this.model)
          .subscribe(
              data => {

                  if(data.success){

                    this.loading = false;
                    this.messService.success(data.mensaje);
                    this.showMess();

                    setTimeout(() => {

                      this.router.navigate(['/login']);
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
