import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PasajeroService } from './pasajero.service';
import { ToastService } from '../../compartido/services/toast.service';
import { PaisService } from '../services/pais.service';

declare var jQuery: any;

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent implements OnInit, AfterViewInit {

  filtro;

  model: any = {};
  pasajeros = [];
  paises = [];
  user: any = {};
  loading = false;
  loading_pas = true;
  readOnly = true;
  accion: string;

  mensajeConfirmacion;

  constructor(private pasajeroService: PasajeroService,
    private paisService: PaisService,
    private toastService: ToastService) { }

  ngOnInit() {

    this.loadAllPasajeros();
    this.setSelect2Paises();
  }

  ngAfterViewInit() {
    jQuery('#pais').select2();
  }

  delete() {
    this.loading = true;

    this.model.accion = this.accion;

    this.pasajeroService.mantenimiento(this.model)
      .subscribe(
        data => {
          if (data.success) {

            this.toastService.showSuccess('Registro eliminado con éxito');
            this.loading = false;
            this.loadAllPasajeros();
          } else {

            this.toastService.showError(data.mensaje);
            this.loading = false;
            this.hideModal();
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
    this.model.idPais = jQuery('#pais').val();

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

    this.pasajeroService.mantenimiento(this.model)
      .subscribe(
        data => {
          if (data.success) {

            this.toastService.showSuccess(mensaje);
            this.loading = false;
            this.loadAllPasajeros();
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
    jQuery('#confirmaModal').modal('hide');
  }

  setNuevo() {

    this.accion = 'I';
    this.model = { accion: undefined, idPasajero: undefined };
    this.model.idpasajero = 0;
    this.readOnly = false;
  }

  setModi(model: any) {

    this.accion = 'U';
    jQuery('#pais').val('' + model.idPais);
    jQuery('#pais').trigger('change');

    setTimeout(() => {
      jQuery('#pais').select2();
    }, 200);

    this.model = Object.assign({}, model);
    this.readOnly = false;
  }

  setDelete(model: any) {

    this.accion = 'D';
    this.model = Object.assign({}, model);
    this.mensajeConfirmacion = '¿Desea eliminar el registro?';
  }

  private loadAllPasajeros() {
    this.loading_pas = true;
    this.pasajeroService.getAll().subscribe(response => {

      if (response.success) {

        this.pasajeros = response.data;
      } else {
        console.log('Error>> loadAllPasajeros>> ' + response.mensaje);
      }
      this.loading_pas = false;
    }, error => {
      this.loading_pas = false;
      console.log('Error>> loadAllPasajeros>> ' + error.message);
    });
  }

  private setSelect2Paises() {

    this.paisService.get().subscribe(
      response => {

        if (response.success) {

          for (let i = 0; i < response.data.length; i++) {

            this.paises.push({ id: '' + response.data[i].idPais, text: response.data[i].pais });
          }
        } else {

          console.log('Error>> loadAllFormaPagos>> ' + response.mensaje);
        }
      });
  }

  private hideModal() {

    jQuery('#pasajeroModal').modal('hide');
  }
}
