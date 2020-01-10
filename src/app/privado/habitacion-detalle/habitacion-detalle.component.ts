import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitacionService } from '../habitacion/habitacion.service';
import { GaleriaService } from '../galeria/galeria.service';
import { ToastService } from '../../compartido/services/toast.service';
import { TipoHabitacionService } from '../tipo-habitacion/tipo-habitacion.service';
import { EspecificacionService } from '../especificacion/especificacion.service';
import { CamaService } from '../cama/cama.service';

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
  imagesFilter: any = [];
  images: any = [];
  tiposHabitacion: any = [];
  tiposHabitacionFormat: any = [];
  especificaciones: any = [];
  camas: any = [];

  loading;
  loadingList;

  loadingAddEspecificacion;
  loadingAddCama;

  isChoosing;

  mensajeConfirmacion = '';

  varianteSelected = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private habitacionService: HabitacionService,
    private galeriaService: GaleriaService,
    private tipoHabitacionService: TipoHabitacionService,
    private espcificacionService: EspecificacionService,
    private camaService: CamaService,
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
    this.loadCamas();
  }

  showImageSelector() {
    this.isChoosing = true;
  }

  filterImages() {
    this.imagesFilter = this.images.filter(image => {
      return !this.habitacionImages.find(habitacionImage => habitacionImage.idFoto === image.idFoto);
    });
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

  addCama(cama) {
    this.loadingAddCama = true;
    this.habitacionService.addCama({ ...this.varianteSelected, ...cama }).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.loadHabitacion();
        } else {
          this.toastService.showError(data.mensaje);
        }

        this.loadingAddCama = false;
      },
      error => {
        this.toastService.showSuccess('Ocurrió un error al guardar el registro.');
        console.log(error);
        this.loadingAddCama = false;
      }
    );
  }

  deleteCama(cama) {
    this.habitacionService
      .deleteCama({ idHabitacion: this.idHabitacion, idCama: cama.idCama, idTipoHabitacion: cama.idTipoHabitacion })
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

  showCamaModal(e, variante) {
    jQuery('#selectCamaModal').modal('show');
    this.varianteSelected = {
      idHabitacion: this.habitacion.idHabitacion,
      habitacion: this.habitacion.habitacion,
      idTipoHabitacion: variante.idTipoHabitacion,
      tipoHabitacion: variante.tipoHabitacion
    };
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

  guardarTarifa(value, variante) {
    this.loading = true;

    let model = {
      idHabitacion: this.habitacion.idHabitacion,
      idTipoHabitacion: variante.idTipoHabitacion,
      tarifa: value
    };

    this.habitacionService.saveTarifa(model).subscribe(
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

  guardarCapacidad(value, variante) {
    this.loading = true;

    let model = {
      idHabitacion: this.habitacion.idHabitacion,
      idTipoHabitacion: variante.idTipoHabitacion,
      capacidad: value
    };

    this.habitacionService.saveCapacidad(model).subscribe(
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

  guardarDescripcionTipoHabitacion(value, variante) {
    this.loading = true;

    let model = {
      idHabitacion: this.habitacion.idHabitacion,
      idTipoHabitacion: variante.idTipoHabitacion,
      descripcion: value
    };

    this.habitacionService.saveDescripcionTipoHabitacion(model).subscribe(
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

  guardarTipoHabitacion(value) {
    this.loading = true;
    this.habitacionService
      .saveTipoHabitacion({
        idHabitacion: this.habitacion.idHabitacion,
        tipos: value.map(val => {
          return { idTipoHabitacion: val };
        })
      })
      .subscribe(
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

  guardarDescripcion(value) {
    this.guardarHabitacion('descripcion', value);
  }

  guardarPublicadoWeb() {
    this.guardarHabitacion('publicadoWeb', this.habitacion.publicadoWeb ? 1 : 0);
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

  addImage(idFotos) {
    this.loading = true;
    this.habitacionService.addImages({ idHabitacion: this.idHabitacion, idFotos }).subscribe(
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
          let habitacion = response.data;
          habitacion.idTipoHabitacion = habitacion.variantes.map(variante => variante.idTipoHabitacion);
          this.habitacion = { ...habitacion };
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
          this.filterImages();
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
          this.filterImages();
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

  loadCamas() {
    this.camaService.get().subscribe(
      response => {
        if (response.success) {
          this.camas = response.data;
        } else {
          console.log('Error>> loadCamas ==> ', response.mensaje);
        }
      },
      error => {
        console.log('Error>> loadCamas ==> ', error);
      }
    );
  }
}
