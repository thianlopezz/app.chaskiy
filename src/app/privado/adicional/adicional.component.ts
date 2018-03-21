import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdicionalService } from './adicional.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';

import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-adicional',
  templateUrl: './adicional.component.html',
  styleUrls: ['./adicional.component.css']
})
export class AdicionalComponent implements OnInit, OnDestroy {

  filtro;

  model: any = {};
  adds: any[] = [];
  user: any = {};
  loading = false;
  loading_adi = true;
  readOnly = true;
  accion: string;

  subscription: any;

  constructor(private router: Router,
    private addService: AdicionalService,
    private toastService: ToastService,
    private confirmacionService: ConfirmacionService,
    private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {

    this.loadAllAdds();
    this.subscription = this.confirmacionEventService.getAcceptChangeEmitter()
      .subscribe(resp => this.selectedVal(resp));
  }

  selectedVal(resp: string) {

    if (resp === 'aceptar') {
      this.delete();
    } else if (resp === 'cancelar') {
      this.model = {};
      this.readOnly = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete() {
    this.loading = true;

    this.model.accion = this.accion;

    this.addService.mantenimiento(this.model)
      .subscribe(
      data => {
        if (data.success) {

          this.toastService.showSuccess('Registro eliminado con éxito');
          this.loading = false;
          this.loadAllAdds();
          this.hideModal();
        } else {

          this.toastService.showError(data.mensaje);
          this.loading = false;
          this.hideModal();
        }
      },
      error => {

        this.toastService.showError('Ocurrió un error al eliminar el registro');
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

    this.addService.mantenimiento(this.model)
      .subscribe(
      data => {
        if (data.success) {

          this.toastService.showSuccess(mensaje);
          this.loading = false;
          this.loadAllAdds();
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
    this.model = {};
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

  private loadAllAdds() {
    this.loading_adi = true;
    this.addService.getAll().subscribe(adds => {

      if (adds.success) {
        this.adds = adds.data;
      } else {
        console.log('Error>> loadAllAdds>> ' + adds.mensaje);
      }
      this.loading_adi = false;
    },
      error => {
        console.log('Error>> loadAllAdds>> ' + error.message);
        this.loading_adi = false;
      });
  }

  private hideModal() {
    jQuery('#adicionalModal').modal('hide');
  }

}
