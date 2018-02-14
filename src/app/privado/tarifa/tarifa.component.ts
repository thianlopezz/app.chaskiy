import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TarifaService } from './tarifa.service';
import { MensajeService } from '../../compartido/components/modal-mensaje/mensaje.service';
import { ConfirmacionService } from '../../compartido/components/modal-confirmacion/confirmacion.service';
import { ConfirmacionEventService } from '../../compartido/components/modal-confirmacion/confirmacion-event.service';
import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit, OnDestroy {

  model: any = {};
  tarifas = [];
  tipos: any[];
  user: any = {};
  loading = false;
  loading_tar = true;
  readOnly = true;
  accion: string;

  subscription: any;

  constructor(private router: Router,
    private tarifaService: TarifaService,
    private toastService: ToastService,
    private confirmacionService: ConfirmacionService,
    private confirmacionEventService: ConfirmacionEventService) { }

  ngOnInit() {

    this.loadAllTarifas();
    this.loadAllTipos();
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

    this.tarifaService.mantenimiento(this.model)
      .subscribe(
      data => {
        if (data.success) {

          this.toastService.showSuccess('Registro eliminado con éxito');
          this.loading = false;
          this.loadAllTarifas();
          this.modalHide();
        } else {

          this.toastService.showError(data.mensaje);
          this.loading = false;
          this.modalHide();
        }
      },
      error => {

        this.toastService.showError('Ocurrió al eliminar el registro');
        console.log(error);
        this.loading = false;
        this.modalHide();
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

    this.tarifaService.mantenimiento(this.model)
      .subscribe(
      data => {
        if (data.success) {

          this.toastService.showSuccess(mensaje);
          this.loading = false;
          this.loadAllTarifas();
          form.resetForm();
          this.modalHide();
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

  private loadAllTarifas() {

    this.loading_tar = true;

    this.tarifaService.getAll().subscribe(response => {

      if (response.success) {
        this.tarifas = response.data;
      } else {
        console.log('Error>> loadAllTarifas>> ' + response.mensaje);
      }

      this.loading_tar = false;
    });
  }

  private loadAllTipos() {
    this.tarifaService.getAllTipos().subscribe(response => {

      if (response.success) {
        this.tipos = response.data;
      } else {
        console.log('Error>> loadAllTarifas>> ' + response.mensaje);
      }
    });
  }

  private modalHide() {

    jQuery('#tarifaModal').modal('hide');
  }

}
