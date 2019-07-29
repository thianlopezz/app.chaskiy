import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from '../habitacion/habitacion.service';
import { GaleriaService } from '../galeria/galeria.service';
import { ToastService } from '../../compartido/services/toast.service';
import { TipoHabitacionService } from '../tipo-habitacion/tipo-habitacion.service';
import { EspecificacionService } from '../especificacion/especificacion.service';

declare var jQuery: any;

@Component({
  selector: 'app-habitacion-detalle',
  templateUrl: './habitacion-detalle.component.html',
  styleUrls: ['./habitacion-detalle.component.css']
})
export class HabitacionDetalleComponent implements OnInit {
  idHabitacion;
  idFoto;
  habitacion: any = {};
  habitacionImages: any = [];
  images: any = [];
  tiposHabitacion: any = [];
  tiposHabitacionFormat: any = [];
  especificaciones: any = [];

  loading;
  loadingList;

  loadingAddEspecificacion;

  isChoosing;

  mensajeConfirmacion = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private habitacionService: HabitacionService,
    private galeriaService: GaleriaService,
    private tipoHabitacionService: TipoHabitacionService,
    private espcificacionService: EspecificacionService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.idHabitacion = params['idHabitacion'];
        this.loadHabitacion();
        this.loadHabitacionImages();
      },
      error => {
        this.router.navigate(['/']);
      }
    );

    this.loadGallery();
    this.loadTiposHabitacion();
    this.loadEspecificaciones();
  }

  addEspecificacion(especificacion) {
    this.loadingAddEspecificacion = true;
    this.habitacionService
      .addEspecificacion({ idEspecificacion: especificacion.idEspecificacion, idHabitacion: this.idHabitacion })
      .subscribe(
        data => {
          if (data.success) {
            this.toastService.showSuccess(data.mensaje);
            this.loadHabitacion();
          } else {
            this.toastService.showError(data.mensaje);
          }

          this.loadingAddEspecificacion = false;
        },
        error => {
          this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
          console.log(error);
          this.loadingAddEspecificacion = false;
        }
      );
  }

  deleteEspecificacion(especificacion) {
    this.habitacionService
      .deleteEspecificacion({ idEspecificacion: especificacion.idEspecificacion, idHabitacion: this.idHabitacion })
      .subscribe(
        data => {
          if (data.success) {
            this.toastService.showSuccess(data.mensaje);
            this.loadHabitacion();
          } else {
            this.toastService.showError(data.mensaje);
          }
        },
        error => {
          this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
          console.log(error);
        }
      );
  }

  showEspecificacionModal(e) {
    jQuery('#selectEspecificacionModal').modal('show');
  }

  hideModalConfirmacion() {
    jQuery('#confirmaModal').modal('hide');
  }

  delete() {
    this.habitacionService.deleteFoto({ idFoto: this.idFoto, idHabitacion: this.idHabitacion }).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.loadHabitacionImages();
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

  feature(idFoto) {
    this.habitacionService.featureFoto({ idFoto, idHabitacion: this.idHabitacion }).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.loadHabitacionImages();
        } else {
          this.toastService.showError(data.mensaje);
        }
      },
      error => {
        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        console.log(error);
      }
    );
  }

  guardarTarifa(value) {
    this.guardarHabitacion('tarifa', value);
  }

  guardarCapacidad(value) {
    this.guardarHabitacion('capacidad', value);
  }

  guardarTipoHabtiacion(value) {
    this.guardarHabitacion('idTipoHabitacion', value);
  }

  guardarDescripcion(value) {
    this.guardarHabitacion('descripcion', value);
  }

  guardarHabitacion(name, value) {
    this.loading = true;
    let habitacion = { accion: 'U', ...this.habitacion };
    habitacion[name] = value;

    this.habitacionService.mantenimiento(habitacion).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.loadHabitacion();
        } else {
          this.toastService.showError(data.mensaje);
        }
        this.loading = false;
      },
      error => {
        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        console.log(error);
        this.loading = false;
      }
    );
  }

  addImage(idFoto) {
    this.loading = true;
    this.habitacionService.addImage({ idHabitacion: this.idHabitacion, idFoto }).subscribe(
      response => {
        if (response.success) {
          this.toastService.showSuccess(response.mensaje);
          this.loadHabitacionImages();
        } else {
          this.toastService.showSuccess(response.mensaje);
        }
        this.loading = false;
        this.isChoosing = false;
      },
      error => {
        console.log(error);

        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        this.loading = false;
      }
    );
  }

  loadHabitacion() {
    this.habitacionService.getById(this.idHabitacion).subscribe(
      response => {
        if (response.success) {
          this.habitacion = response.data;
        } else {
          console.log('Error>> loadHabitacion ==> ', response.mensaje);
        }
      },
      error => {
        console.log('Error>> loadHabitacion ==> ', error);
      }
    );
  }

  loadHabitacionImages() {
    this.loadingList = true;
    this.habitacionService.getFotos(this.idHabitacion).subscribe(
      response => {
        if (response.success) {
          this.habitacionImages = response.data;
        } else {
          console.log('Error>> loadHabitacionImages ==> ', response.mensaje);
        }

        this.loadingList = false;
      },
      error => {
        console.log('Error>> loadHabitacionImages ==> ', error);
        this.loadingList = false;
      }
    );
  }

  loadGallery() {
    this.galeriaService.get().subscribe(
      response => {
        if (response.success) {
          this.images = response.data;
        } else {
          console.log('Error>> loadGallery ==> ', response.mensaje);
        }
      },
      error => {
        console.log('Error>> loadGallery ==> ', error);
      }
    );
  }

  loadTiposHabitacion() {
    this.tipoHabitacionService.get().subscribe(
      response => {
        if (response.success) {
          this.tiposHabitacion = response.data;
          this.tiposHabitacionFormat = this.tiposHabitacion.map(tipo => {
            return { value: tipo.idTipoHabitacion, text: tipo.tipoHabitacion };
          });
        } else {
          console.log('Error>> loadTipoHabitacion ==> ', response.mensaje);
        }
      },
      error => {
        console.log('Error>> loadTipoHabitacion ==> ', error);
      }
    );
  }

  loadEspecificaciones() {
    this.espcificacionService.get().subscribe(
      response => {
        if (response.success) {
          this.especificaciones = response.data;
        } else {
          console.log('Error>> loadEspecificaciones ==> ', response.mensaje);
        }
      },
      error => {
        console.log('Error>> loadEspecificaciones ==> ', error);
      }
    );
  }
}
