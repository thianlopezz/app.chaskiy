import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastService } from '../../../../compartido/services/toast.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subir-modal',
  templateUrl: './subir-modal.component.html',
  styleUrls: ['./subir-modal.component.css']
})
export class SubirModalComponent implements OnInit {
  @Input() _loading;
  @Input() _model: any = {};

  @Output() _guardar = new EventEmitter<any>();

  imagesPreview = [];

  constructor(private toast: ToastService) {}

  ngOnInit() {}

  openFileInput() {
    // FIXME: no creo que este bien hacer esto
    document.getElementById('file').click();
  }

  handleFileChange(e) {
    let files: FileList = e.target.files;
    this._model.files = files;
    let imagesPreview = [];

    let maxLength;
    if (files.length > 10) {
      this.toast.showWarning('Solo puedes seleccionar 10 imágenes como máximo.');
      maxLength = 10;
    } else {
      maxLength = files.length;
    }

    for (let i = 0; i < maxLength; i++) {
      let fileToPreview = files[i];
      let fr = new FileReader();
      fr.readAsDataURL(fileToPreview);
      fr.onload = e => {
        imagesPreview.push(fr.result);
      };
    }

    this.imagesPreview = imagesPreview;
  }

  guardar(f?: NgForm) {
    if (this._model.files.length == 0) {
      this.toast.showWarning('Debes seleccionar almenos una imagen.');
      return;
    }

    this._guardar.next({ ...this._model });
  }
}
