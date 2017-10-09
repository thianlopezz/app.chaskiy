import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habitacion } from '../_models/index';
import { AlertService, ConfirmService, AcceptService,
          RoomService, AuthenticationService, MessageService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';

declare var jQuery:any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
	model: any = {};
	rooms: Habitacion[] = [];
  user: any = {};
  loading = false;
  readOnly = true;
  accion: string;

  subscription: any;

  jQuery:any;

  constructor(private authService: AuthenticationService,
                private router: Router,
                private roomService: RoomService,
                private alertService: AlertService,
                private messService: MessageService,
                private confirmService: ConfirmService,
                private acceptService: AcceptService) { }

  ngOnInit() {

    this.isLogged();

    this.loadAllRooms();
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

    this.roomService.mantenimiento(this.model)
        .subscribe(
            data => {
                if(data.success){

                  // this.alertService.success('Registro eliminado con éxito', true);
                  this.messService.success('Registro eliminado con éxito');
                  this.loading = false;
                  this.loadAllRooms();
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

    this.roomService.mantenimiento(this.model)
        .subscribe(
            data => {
                if(data.success){

                  this.messService.success(mensaje);
                  this.loading = false;
                  this.loadAllRooms();
                  form.resetForm();
                  this.showMess();
                }
                else{

                  this.messService.error(data.mensaje);
                  this.loading = false;
                  jQuery("#messModal").modal("show");
                  //this.showMess();
                }
            },
            error => {

                this.messService.error(mensaje_err);
                console.log(error);
                this.loading = false;
                //this.showMess();
                jQuery("#messModal").modal("show");
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



private loadAllRooms() {

  this.roomService.getAll().subscribe(rooms => {

    if(rooms.success)
      this.rooms = rooms.data;
    else
      console.log('Error>> loadAllRooms>> ' + rooms.mensaje);
  });
}

private showMess(){

  jQuery("#habitacionModal").modal("hide");

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
