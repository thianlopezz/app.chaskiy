import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterService, MessageService } from '../_services/index';

declare var jQuery:any;

@Component({
  selector: 'app-activa-cuenta',
  templateUrl: './activa-cuenta.component.html',
  styleUrls: ['./activa-cuenta.component.css']
})
export class ActivaCuentaComponent implements OnInit {

  muestra = false;

  constructor(private route: ActivatedRoute,
              private registerService: RegisterService,
              private router: Router,
              private messService: MessageService) { }

  ngOnInit() {
    debugger;

    this.route
        .queryParams
        .subscribe(params => {
          debugger;

          this.registerService.activa(params['token'])
              .subscribe(
                  data => {

                      if(data.success){

                        this.muestra = true;
                      }
                      else{

                        this.messService.error(data.mensaje);
                        this.showMess();
                      }
                  },
                  error => {

                      console.log(error);

                      this.messService.error(error);
                      this.showMess();
                  });
        }, error=> {

          this.router.navigate(['/']);
        });
  }

  private showMess(){

      setTimeout(() => {

        jQuery("#messModal").modal("show");
      }, 200);
  }

}
