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

  constructor(private toast: ToastService) {}

  ngOnInit() {}

  openFileInput() {
    // FIXME: no creo que este bien hacer esto
    document.getElementById('file').click();
  }

  handleFileChange(e) {
    this._model.file = e.target.files[0];
    let fr = new FileReader();
    fr.readAsDataURL(this._model.file);
    fr.onload = e => {
      this._model.imagePreview = fr.result;
    };
  }

  guardar(f: NgForm) {
    if (!this._model.file) {
      this.toast.showWarning('Debes seleccionar una imagen.');
      return;
    }

    this._guardar.next({ ...this._model });
  }
}
