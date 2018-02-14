import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HabitacionService } from './habitacion.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';

import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit, OnDestroy {
  model: any = {};
  rooms = [];
  user: any = {};
  loading = false;
  loading_hab = true;
  readOnly = true;
  accion: string;

  subscription: any;

  constructor(private router: Router,
    private habitacionService: HabitacionService,
    private toastService: ToastService,
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
      this.model = { accion: undefined, idhabitacion: undefined };
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

          this.toastService.showSuccess('Registro eliminado con éxito');
          this.loading = false;
          this.loadAllRooms();
          this.hideModal();
        } else {

          this.toastService.showError(data.mensaje);
          this.loading = false;
          this.hideModal();
        }
      },
      error => {

        this.toastService.showError('Ocurrió al eliminar el registro');
        console.log(error);
        this.loading = false;
        this.hideModal();
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

          this.toastService.showSuccess(mensaje);
          this.loading = false;
          this.loadAllRooms();
          form.resetForm();
          this.hideModal();
        } else {

          this.toastService.showError(data.mensaje);
          this.loading = false;
          jQuery('#messModal').modal('show');
        }
      },
      error => {

        this.toastService.showError(mensaje_err);
        console.log(error);
        this.loading = false;
        jQuery('#messModal').modal('show');
      });

  }

  setNuevo() {

    this.accion = 'I';
    this.model = { accion: undefined, idhabitacion: undefined };
    this.model.idhabitacion = 0;
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
    this.loading_hab = true;
    this.habitacionService.getAll().subscribe(rooms => {

      if (rooms.success) {
        this.rooms = rooms.data;
      } else {
        console.log('Error>> loadAllRooms>> ' + rooms.mensaje);
      }
      this.loading_hab = false;
    }, error => {
      this.loading_hab = false;
      console.log('Error>> loadAllRooms>> ' + error.message);
    });
  }

  private hideModal() {

    jQuery('#habitacionModal').modal('hide');
  }

}
