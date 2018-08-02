import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HabitacionService } from './habitacion.service';

import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {

  filtro;

  model: any = {};
  rooms = [];
  user: any = {};
  loading = false;
  loading_hab = true;
  readOnly = true;
  accion: string;

  mensajeConfirmacion;

  constructor(private habitacionService: HabitacionService,
    private toastService: ToastService) { }

  ngOnInit() {

    this.loadAllRooms();
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
          } else {

            this.toastService.showError(data.mensaje);
            this.loading = false;
          }

          jQuery('#confirmaModal').modal('hide');
        },
        error => {

          this.toastService.showError('Ocurrió al eliminar el registro');
          console.log(error);
          this.loading = false;

          jQuery('#confirmaModal').modal('hide');
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

  onCancelar() {
    this.model = {};
    this.readOnly = true;
  }

  setNuevo() {

    this.accion = 'I';
    this.model = {};
    this.model.idHabitacion = 0;
    this.readOnly = false;
  }

  setModi(model: any) {

    this.accion = 'U';
    this.model = Object.assign({}, model);
    this.readOnly = false;
  }

  setDelete(model: any) {

    this.accion = 'D';
    this.model = Object.assign({}, model);
    this.mensajeConfirmacion = '¿Desea eliminar el registro?';
  }



  private loadAllRooms() {
    this.loading_hab = true;
    this.habitacionService.getAll().subscribe(response => {

      if (response.success) {
        this.rooms = response.data;
      } else {
        console.log('Error>> loadAllRooms>> ' + response.mensaje);
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
