import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PagoService } from '../pago.service';
import { ToastService } from '../../../compartido/services/toast.service';
import { NgForm } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent implements OnInit, OnChanges {

  @Input() idReserva;
  @Input() formaPagos = [];
  @Input() total = 0;

  @Output() success = new EventEmitter<Number>();
  @Output() cancelarPago = new EventEmitter<Number>();

  loading;
  model: any = {};
  accion;
  pagos = [];

  totalPagado = 0;

  mensajeConfirmacion;

  constructor(private pagoService: PagoService,
    private toastService: ToastService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.idReserva && changes.idReserva.currentValue) {
      this.getPagos(true);
    }
  }

  setNuevo() {
    this.accion = 'I';
    this.model = {};
    jQuery('#pagoModal').modal('show');
    jQuery('#pagosModal').modal('hide');
  }

  _cancelarPago(model: any) {
    this.cancelarPago.next(model);
  }

  getPagos(devulveTotalPagado?) {

    this.loading = true;

    this.pagoService.get(this.idReserva)
      .subscribe(pagos => {

        this.loading = false;

        if (pagos.success) {

          this.pagos = pagos.data;

          let sum = 0;

          for (let i = 0; i < pagos.data.length; i++) {

            sum += pagos.data[i].monto;
          }

          this.totalPagado = sum;

          if (devulveTotalPagado) {
            this.success.next(this.totalPagado);
          }

        } else {

          this.toastService.showError(pagos.mensaje);
        }
      },
        error => {
          this.loading = false;
          this.toastService.showError('Ocurrió un error al obtener los pagos');
          console.log(error);
        });
  }

  guardar(form: NgForm) {

    this.loading = true;

    this.model.idReserva = this.idReserva;
    this.model.accion = this.accion;

    let mensajeError = '';

    switch (this.accion) {
      case 'I':
        mensajeError = 'Ocurrió un error al generar el pago';
        break;
      case 'U':
        mensajeError = 'Ocurrió un error al modificar el pago';
        break;
    }

    this.pagoService.mantenimiento(this.model)
      .subscribe(
        response => {

          this.loading = false;

          if (response.success) {
            form.resetForm();
            this.getPagos(true);
            this.toastService.showSuccess(response.mensaje);
            jQuery('#pagoModal').modal('hide');
            jQuery('#pagosModal').modal('show');
          } else {

            this.loading = false;
            this.toastService.showError(response.mensaje);
          }
        },
        error => {

          console.log(error);
          this.loading = false;
          this.toastService.showError(mensajeError);
        });
  }

  onCancelar() {
    this.model = {};
  }

  // CERRAR PRIEMR MODAL
  cerrarModalPagos() {
    jQuery('#pagosModal').modal('hide');
    jQuery('#reservaModal').modal('show');
  }

  // CERRAR SEGUNDO MONDAL
  cerrarModalPago() {
    jQuery('#pagoModal').modal('hide');
    jQuery('#pagosModal').modal('show');
  }

}
