import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HabitacionService } from './habitacion.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
declare var jQuery: any;

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit, OnDestroy {
  model = { accion: undefined, idHabitacion: undefined };
  rooms = [];
  user: any = {};
  loading = false;
  readOnly = true;
  accion: string;

  subscription: any;

  constructor(private router: Router,
              private habitacionService: HabitacionService,
              private mensajeService: MensajeService,
              private confirmacionService: ConfirmacionService,
              private acceptService: ConfirmacionEventService) { }

  ngOnInit() {


    this.loadAllRooms();
    this.subscription = this.acceptService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  selectedVal(resp: string) {
    if (resp === 'aceptar') {
      this.delete();
    } else if (resp === 'cancelar') {
        this.model = { accion: undefined, idHabitacion: undefined };
        this.readOnly = true;
      }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete() {
    this.loading = true;

    this.model.accion = this.accion;

    this.habitacionService.mantenimiento(this.model)
        .subscribe(
            data => {
                if (data.success) {

                  // this.alertService.success('Registro eliminado con éxito', true);
                  this.mensajeService.success('Registro eliminado con éxito');
                  this.loading = false;
                  this.loadAllRooms();
                  this.showMess();
                } else {

                  this.mensajeService.error(data.mensaje);
                  this.loading = false;
                  this.showMess();
                }
            },
            error => {

                this.mensajeService.error('Ocurrió al eliminar el registro');
                console.log(error);
                this.loading = false;
                this.showMess();
            });
  }

  guardar(form: NgForm) {

    this.loading = true;

    this.model.accion = this.accion;

    let mensaje = '';
    let mensaje_err = '';

    switch (this.accion) {
      case 'I':
        mensaje = 'Registro creado con éxito';
        mensaje_err = 'Ocurrió al crear el registro';
      break;
      case 'U':
        mensaje = 'Registro modificado con éxito';
        mensaje_err = 'Ocurrió al modificar el registro';
      break;
    }

    this.habitacionService.mantenimiento(this.model)
        .subscribe(
            data => {
                if (data.success) {

                  this.mensajeService.success(mensaje);
                  this.loading = false;
                  this.loadAllRooms();
                  form.resetForm();
                  this.showMess();
                } else {

                  this.mensajeService.error(data.mensaje);
                  this.loading = false;
                  jQuery('#messModal').modal('show');
                }
            },
            error => {

                this.mensajeService.error(mensaje_err);
                console.log(error);
                this.loading = false;
                jQuery('#messModal').modal('show');
            });

  }

  setNuevo() {

    this.accion = 'I';
    this.model = { accion: undefined, idHabitacion: undefined };
    this.model.idHabitacion = 0;
    this.readOnly = false;
  }

  setModi(model: any) {

    this.accion = 'U';
    this.model = Object.assign({}, model);
    this.readOnly = false;
  }

  setElim(model: any) {

    this.accion = 'D';
    this.model = Object.assign({}, model);
    this.confirmacionService.go('¿Desea eliminar el registro?');
  }



private loadAllRooms() {

  this.habitacionService.getAll().subscribe(rooms => {

    if (rooms.success) {
      this.rooms = rooms.data;
    } else {
      console.log('Error>> loadAllRooms>> ' + rooms.mensaje);
    }
  });
}

private showMess() {

  jQuery('#habitacionModal').modal('hide');

    setTimeout(() => {

      jQuery('#messModal').modal('show');
    }, 200);
}

}
