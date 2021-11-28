import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgenciaService } from './agencia.service';

import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {
  filtro;

  model: any = {};
  agencias: any[] = [];
  user: any = {};
  loading = false;
  loadingAgencia = true;
  readOnly = true;
  accion: string;

  mensajeConfirmacion;

  constructor(private agenciaService: AgenciaService, private toastService: ToastService) {}

  ngOnInit() {
    this.loadAgencias();
  }

  delete() {
    this.loading = true;

    this.model.accion = this.accion;

    this.agenciaService.mantenimiento(this.model).subscribe(
      (data: any) => {
        if (data.success) {
          this.toastService.showSuccess('Registro eliminado con éxito');
          this.loading = false;
          this.loadAgencias();
        } else {
          this.toastService.showError(data.mensaje);
          this.loading = false;
        }

        jQuery('#confirmaModal').modal('hide');
      },
      error => {
        this.toastService.showError('Ocurrió un error al eliminar el registro');
        console.log(error);
        this.loading = false;

        jQuery('#confirmaModal').modal('hide');
      }
    );
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

    this.agenciaService.mantenimiento(this.model).subscribe(
      (data: any) => {
        if (data.success) {
          this.toastService.showSuccess(mensaje);
          this.loading = false;
          this.loadAgencias();
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
      }
    );
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

  private loadAgencias() {
    this.loadingAgencia = true;
    this.agenciaService.get().subscribe(
      (agencias: any) => {
        if (agencias.success) {
          this.agencias = agencias.data;
        } else {
          console.log('Error>> loadAllAdds>> ' + agencias.mensaje);
        }
        this.loadingAgencia = false;
      },
      error => {
        console.log('Error>> loadAllAdds>> ' + error.message);
        this.loadingAgencia = false;
      }
    );
  }

  private hideModal() {
    jQuery('#agenciaModal').modal('hide');
  }
}
