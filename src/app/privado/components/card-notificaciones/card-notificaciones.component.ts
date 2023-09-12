import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../../../privado/notificaciones/notificacion.service';

@Component({
  selector: 'app-card-notificaciones',
  templateUrl: './card-notificaciones.component.html',
  styleUrls: ['./card-notificaciones.component.css']
})
export class CardNotificacionesComponent implements OnInit {
  loading = true;

  notificaciones = [];

  constructor(private notificacionService: NotificacionService) {}

  ngOnInit() {
    // this.getNotificaciones();
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  getNotificaciones() {
    this.loading = true;
    this.notificacionService.get().subscribe(
      (result: any) => {
        if (result.success) {
          this.notificaciones = result.data;
        }
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  goNotificacion() {}
}
