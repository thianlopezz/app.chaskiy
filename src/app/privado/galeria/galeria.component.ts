import { Component, OnInit } from '@angular/core';
import { GaleriaService } from './galeria.service';
import { ToastService } from '../../compartido/services/toast.service';

declare var jQuery: any;

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  imageModel = {};
  images = [];

  loading;
  loadingList;

  mensajeConfirmacion;

  idFoto;

  constructor(private galeriaService: GaleriaService, private toastService: ToastService) {}

  ngOnInit() {
    this.loadGallery();
  }

  hideModalConfirmacion() {
    jQuery('#confirmaModal').modal('hide');
  }

  delete() {
    this.galeriaService.deleteFoto({ idFoto: this.idFoto }).subscribe(
      (data: any) => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.loadGallery();
        } else {
          this.toastService.showError(data.mensaje);
        }
        this.hideModalConfirmacion();
      },
      error => {
        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        this.hideModalConfirmacion();
        console.log(error);
      }
    );
  }

  onCancelar() {
    this.hideModalConfirmacion();
    this.idFoto = undefined;
  }

  deleteAttemp(idFoto) {
    this.idFoto = idFoto;
    this.mensajeConfirmacion = '¿Está seguro de eliminar la imagen?';
  }

  showModal() {
    jQuery('#subirModal').modal('show');
  }

  hideModal() {
    jQuery('#subirModal').modal('hide');
  }

  guardarImagen(image) {
    this.loading = true;
    this.galeriaService.uploadImages(image.files, '').subscribe(
      (response: any) => {
        if (response.success) {
          this.toastService.showSuccess(response.mensaje);
          this.imageModel = {};
          this.loadGallery();
        } else {
          this.toastService.showSuccess(response.mensaje);
        }

        this.hideModal();
        this.loading = false;
      },
      error => {
        console.log(error);

        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        this.hideModal();
        this.loading = false;
      }
    );
  }

  loadGallery() {
    this.loadingList = true;
    this.galeriaService.get().subscribe(
      (response: any) => {
        if (response.success) {
          this.images = response.data;
        } else {
          console.log('Error>> loadGallery ==> ', response.mensaje);
        }

        this.loadingList = false;
      },
      error => {
        console.log('Error>> loadGallery ==> ', error);
        this.loadingList = false;
      }
    );
  }
}
