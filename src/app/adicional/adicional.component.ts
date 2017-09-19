import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Adicional } from '../_models/index';
import { AuthenticationService, ConfirmService,
          AcceptService, AdicionalService, MessageService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-adicional',
  templateUrl: './adicional.component.html',
  styleUrls: ['./adicional.component.css']
})
export class AdicionalComponent implements OnInit {

	model: any = {};
	adds: Adicional[];
	user: any = {};
  loading = false;
  readOnly = true;
  accion: string;

	subscription: any;

  jQuery:any;

  constructor(private authService: AuthenticationService,
                private router: Router,
                private addService: AdicionalService,
                private messService: MessageService,
                private confirmService: ConfirmService,
                private acceptService: AcceptService) { }

  ngOnInit() {

    this.isLogged();

    this.loadAllAdds();
    this.subscription = this.acceptService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  selectedVal(resp: string) {
    if(resp == "aceptar"){
      this.delete();
    }
    else
      if(resp == "cancelar"){
        this.model = {};
        this.readOnly = true;
      }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete(){
    this.loading = true;

    this.model.accion =this.accion;

    this.addService.mantenimiento(this.model)
        .subscribe(
            data => {
                if(data.success){

                  // this.alertService.success('Registro eliminado con éxito', true);
                  this.messService.success('Registro eliminado con éxito');
                  this.loading = false;
                  this.loadAllAdds();
                  this.showMess();
                }
                else{

                  this.messService.error(data.mensaje);
                  this.loading = false;
                  this.showMess();
                }
            },
            error => {

                this.messService.error('Ocurrió al eliminar el registro');
                console.log(error);
                this.loading = false;
                this.showMess();
            });
  }

  guardar(form: NgForm){

    this.loading = true;

    this.model.accion = this.accion;

    var mensaje = "";
    var mensaje_err = "";

    switch (this.accion){
      case 'I':
        mensaje = 'Registro creado con éxito';
        mensaje_err = 'Ocurrió al crear el registro';
      break;
      case 'U':
        mensaje = 'Registro modificado con éxito';
        mensaje_err = 'Ocurrió al modificar el registro';
      break;
    }

    this.addService.mantenimiento(this.model)
        .subscribe(
            data => {
                if(data.success){

                  this.messService.success(mensaje);
                  this.loading = false;
                  this.loadAllAdds();
                  form.resetForm();
                  this.showMess()
                }
                else{

                  this.messService.error(data.mensaje);
                  this.loading = false;
                  this.showMess()
                }
            },
            error => {

                this.messService.error(mensaje_err);
                console.log(error);
                this.loading = false;
                this.showMess()
            });

  }

  setNuevo(){
    this.accion = 'I';
    this.model = {};
    this.model.idHabitacion = 0;
    this.readOnly = false;
  }

  setModi(model: any){
    this.accion = 'U';
    this.model = Object.assign({}, model);
    this.readOnly = false;
  }

  setElim(model: any){
    this.accion = 'D';
    this.model = Object.assign({}, model);
    this.confirmService.go('¿Desea eliminar el registro?');
  }

private loadAllAdds() {
    this.addService.getAll().subscribe(adds => { this.adds = adds; });
}

private showMess(){

	jQuery("#adicionalModal").modal("hide");

    setTimeout(() => {

      jQuery("#messModal").modal("show");
    }, 200);
}

private isLogged(){

    this.authService.isLogged().subscribe(
                                response =>
                                {

                                    if(!response.success)
                                        this.router.navigate(['/login']);
                                },
                                error => this.router.navigate(['/login']) );
}

}
