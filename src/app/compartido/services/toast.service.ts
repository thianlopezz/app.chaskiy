import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastService {

  private options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-left',
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };

  constructor() { }

  showSuccess(comentario, titulo?) {
    toastr.success(titulo || 'Éxito', comentario, this.options);
  }

  showError(comentario, titulo?) {
    toastr.error(titulo || 'Error', comentario, this.options);
  }

  showInfo(comentario, titulo?) {
    toastr.info(titulo || 'Info', comentario, this.options);
  }

  showWarning(comentario, titulo?) {
    toastr.warning(titulo || 'Cuidado', comentario);
  }

}
