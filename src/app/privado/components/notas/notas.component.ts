import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastService } from '../../../compartido/services/toast.service';
import { ReservaService } from '../../reserva/reserva.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  @Input() idReserva: string;
  @Input() notas: any[] = [];

  @Output() showAll = new EventEmitter<any>();
  @Output() onChangeNota = new EventEmitter<any>();

  mode;
  notaSelected = {};

  constructor(private reservaService: ReservaService, private toastService: ToastService) {}

  ngOnInit() {}

  modificarNotas(val, id) {
    if (this.idReserva && id) {
      this.updateNota(val, id);
    } else {
      this.onChangeNota.next(val);
    }
  }

  updateNota(val, id) {
    let nota = { ...this.notaSelected, idReserva: this.idReserva, notas: val, idNotas: id };
    this.reservaService.addUpdateNotas(nota).subscribe(
      (data: any) => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje || 'Registro guardado con éxito');
          this.reservaService.onHasRefetchDetalleReserva(this.idReserva);
          this.mode = undefined;
        } else {
          this.toastService.showError(data.mensaje || 'Ocurrió un error guardando el registro');
        }
      },
      error => {
        console.log(error);
        this.toastService.showError('Ocurrió un error guardando el registro');
      }
    );
  }

  onAdd() {
    this.mode = 'M';
    this.notaSelected = {};
  }

  onShowAll() {
    this.showAll.next();
  }
}
