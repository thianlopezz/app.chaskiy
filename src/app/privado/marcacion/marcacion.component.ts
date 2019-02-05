import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MarcacionService } from './marcacion.service';
import { ToastService } from '../../compartido/services/toast.service';
import { AutenticacionService } from '../../publico/services/autenticacion.service';

@Component({
  selector: 'app-marcacion',
  templateUrl: './marcacion.component.html',
  styleUrls: ['./marcacion.component.css']
})
export class MarcacionComponent implements OnInit {
  marca;
  loading;
  fecha = {};
  hora = {};
  chasker;

  constructor(
    private marcacionService: MarcacionService,
    private authService: AutenticacionService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.chasker = this.authService.getLogin();
    this.initDate();
    this.getMarcacion();
  }

  setMarca(marcas) {
    let marca = marcas.find(
      x =>
        moment(x.feEntrada).format('DD/MM/YYYY') ===
          moment().format('DD/MM/YYYY') &&
        x.idUsuario === this.chasker.idUsuario
    );
    if (marca) {
      marca.feEntrada = moment(marca.feEntrada).toDate();
      if (marca.feSalida) {
        marca.feSalida = moment(marca.feSalida).toDate();
      }
    } else {
      marca = {};
    }
    return marca;
  }

  getMarcacion() {
    this.loading = true;
    this.marcacionService.getAll().subscribe(
      response => {
        if (response.success) {
          this.marca = this.setMarca(response.data);
        } else {
          console.log('Error>> loadAllMarcas>> ' + response.mensaje);
        }
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.log('Error>> loadAllMarcas>> ' + error.message);
      }
    );
  }

  initDate() {
    const fecha = moment();
    this.fecha = {
      dia: fecha.format('DD'),
      mes: fecha.format('MM'),
      anio: fecha.format('YYYY')
    };

    setInterval(() => {
      const hora = moment();
      this.hora = {
        hora: hora.format('HH'),
        minuto: hora.format('mm'),
        segundo: hora.format('ss')
      };
    }, 1000);
  }

  marcar(tipo) {
    let marca;
    if (tipo === 'ENTRADA' && !this.marca.feEntrada) {
      marca = { feEntrada: moment().toDate() };
    } else if (tipo === 'SALIDA' && !this.marca.feSalida) {
      this.marca.feSalida = moment().toDate();
      marca = { ...this.marca };
    }
    this.marcacionService.marcar(marca).subscribe(
      data => {
        if (data.success) {
          this.toastService.showSuccess(data.mensaje);
          this.getMarcacion();
        } else {
          this.toastService.showError(data.mensaje);
        }
      },
      error => {
        this.toastService.showError('Ocurrió un error, inténtalo más tarde.');
        console.log(error);
      }
    );
  }
}
