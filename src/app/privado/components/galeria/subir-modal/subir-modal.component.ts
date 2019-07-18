import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastService } from '../../../../compartido/services/toast.service';

@Component({
  selector: 'app-subir-modal',
  templateUrl: './subir-modal.component.html',
  styleUrls: ['./subir-modal.component.css']
})
export class SubirModalComponent implements OnInit {
  file;
  imagePreview;

  @Output() foto = {};

  @Output() _guardar = new EventEmitter<any>();

  constructor(private toast: ToastService) {}

  ngOnInit() {}

  openFileInput() {
    // FIXME: no creo que este bien hacer esto
    document.getElementById('file').click();
  }

  handleFileChange(e) {
    this.file = e.target.files[0];
    let fr = new FileReader();
    fr.readAsDataURL(this.file);
    fr.onload = e => {
      this.imagePreview = fr.result;
    };
  }

  guardar() {
    if (!this.file) {
      this.toast.showWarning('Debes seleccionar una imagen.');
      return;
    }

    this._guardar.next({ ...this.foto, file: this.file });
  }
}
