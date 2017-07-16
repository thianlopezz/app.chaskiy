import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Habitacion } from '../_models/index';
import { AlertService, ConfirmService, AcceptService, RoomService } from '../_services/index';

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

  constructor(private roomService: RoomService,
                private alertService: AlertService,
                private confirmService: ConfirmService,
                private acceptService:AcceptService) { 
  	this.user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWNjZXNzIjp0cnVlLCJ1c3VhcmlvIjp7ImlkIjoxLCJ1c3VhcmlvIjoidGhpYW5sb3BlenoiLCJub21icmUiOiJDcmlzdGhpYW4gTG9wZXogWmFtcmJhbm8iLCJjb3JyZW8iOiJ0aGlhbmxvcGV6ekBnbWFpbC5jb20ifSwiaWF0IjoxNDk5ODA2MTE1LCJleHAiOjE0OTk4MTMzMTV9.PrffZANYa2vUYa6SHeWZGfz4qUa-pJNkAuimvXWUfZw";

	localStorage.setItem('currentUser', JSON.stringify(this.user));
  }

  ngOnInit() {
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

                  this.alertService.success('Registro eliminado con éxito', true);
                  this.loading = false;
                  this.loadAllRooms();
                }
                else{

                  this.alertService.error(data.mensaje);
                  this.loading = false;
                  jQuery("#habitacionModal").modal("hide");
                }                    
            },
            error => {

                this.alertService.error('Ocurrió al eliminar el registro');
                console.log(error);
                this.loading = false;
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

                  this.alertService.success(mensaje, true);
                  this.loading = false;
                  this.loadAllRooms();
                  form.resetForm();
                  jQuery("#habitacionModal").modal("hide");
                }
                else{

                  this.alertService.error(data.mensaje);
                  this.loading = false;
                  jQuery("#habitacionModal").modal("hide");
                }                    
            },
            error => {

                this.alertService.error(mensaje_err);
                console.log(error);
                this.loading = false;
                jQuery("#habitacionModal").modal("hide");
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
    this.roomService.getAll().subscribe(rooms => { this.rooms = rooms; });
}

}
