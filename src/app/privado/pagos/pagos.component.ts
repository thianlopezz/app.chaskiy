import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { EstadisticaService } from '../services/estadistica.service';
import { PagoService } from '../pagos/pago.service';
import { ChartOptions } from '../models/chart-options';
import { CurrentMonth } from '../models/current-month';

import * as moment from 'moment';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  loading_pg = true;

  public myDatePickerOptions: IAngularMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy'
    // openSelectorOnInputClick: true,
    // showClearDateBtn: false
  };

  toDay = new Date();

  feHasta = {
    date: {
      year: this.toDay.getFullYear(),
      month: this.toDay.getMonth() + 1,
      day: this.toDay.getDate()
    },
    _date: new Date()
  };

  feDesde = {
    date: {
      year: this.toDay.getFullYear() - 1,
      month: this.toDay.getMonth() + 1,
      day: this.toDay.getDate()
    },
    _date: new Date(this.toDay.getFullYear() - 1, this.toDay.getMonth() + 1, this.toDay.getDate(), 0, 0, 0, 0)
  };

  hbDesde: any = {};
  hbHasta: any = {};

  chart: ChartOptions = new ChartOptions({});
  auxMonth: CurrentMonth = new CurrentMonth();

  pagos: any[] = [];
  totalPagos = 0;

  constructor(private estadisticaService: EstadisticaService, private pagoService: PagoService) {}

  ngOnInit() {
    this.goStatistics();
  }

  onDateChanged(event: IMyDateModel, id: string) {
    if (id === 'D') {
      this.feDesde = {
        date: {
          year: event.singleDate.date.year,
          month: event.singleDate.date.month,
          day: event.singleDate.date.day
        },
        _date: new Date(
          event.singleDate.date.year,
          event.singleDate.date.month - 1,
          event.singleDate.date.day,
          0,
          0,
          0,
          0
        )
      };

      this.feHasta = {
        date: {
          year: this.feHasta.date.year,
          month: this.feHasta.date.month,
          day: this.feHasta.date.day
        },
        _date: new Date(this.feHasta.date.year, this.feHasta.date.month - 1, this.feHasta.date.day, 0, 0, 0, 0)
      };
    } else if (id === 'H') {
      this.feDesde = {
        date: {
          year: this.feDesde.date.year,
          month: this.feDesde.date.month,
          day: this.feDesde.date.day
        },
        _date: new Date(this.feDesde.date.year, this.feDesde.date.month - 1, this.feDesde.date.day, 0, 0, 0, 0)
      };

      this.feHasta = {
        date: {
          year: event.singleDate.date.year,
          month: event.singleDate.date.month,
          day: event.singleDate.date.day
        },
        _date: new Date(
          event.singleDate.date.year,
          event.singleDate.date.month - 1,
          event.singleDate.date.day,
          0,
          0,
          0,
          0
        )
      };
    }

    this.goStatistics();
  }

  goStatistics() {
    if (this.feDesde._date.getTime() > this.feHasta._date.getTime()) {
      this.hbDesde = { show: true, mensaje: 'La fecha desde no puede ser mayor a la fecha hasta' };
      return;
    }

    this.hbDesde = { show: false };

    if (this.feHasta._date.getTime() < this.feDesde._date.getTime()) {
      this.hbHasta = { show: true, mensaje: 'La fecha hasta no puede ser menor a la fecha desde' };
      return;
    }

    this.hbHasta = { show: false };

    // TODO: revisar logica
    const feDesde = moment({ d: this.feDesde.date.day, M: this.feDesde.date.month - 1, y: this.feDesde.date.year });
    const feHasta = moment({ d: this.feHasta.date.day, M: this.feHasta.date.month - 1, y: this.feHasta.date.year });

    const ceros = this.genCeros(this.feDesde._date, this.feHasta._date);

    this.getMonthIcom(ceros, feDesde.toDate(), feHasta.toDate());
    this.getDetalles(feDesde.toDate(), feHasta.toDate());
  }

  private getMonthIcom(ceros, feDesde, feHasta) {
    this.estadisticaService.getMonthIcom(feDesde, feHasta).subscribe((montos: any) => {
      if (montos.success) {
        for (let i = 0; i < montos.data.length; i++) {
          for (let j = 0; j < ceros.length; j++) {
            if (ceros[j].mes === montos.data[i].mes && ceros[j].anio === montos.data[i].anio) {
              ceros[j].monto = montos.data[i].monto;
              break;
            }
          }
        }

        const data = {
          labels: [],
          datasets: []
        };

        const ds = [];

        for (let i = 0; i < ceros.length; i++) {
          data.labels.push(this.auxMonth.meses[ceros[i].mes - 1] + '/' + ceros[i].anio);
          ds.push(ceros[i].monto);
        }

        data.datasets.push({
          label: 'Ingresos',
          borderColor: '#e59607',
          backgroundColor: 'rgba(31, 61, 76, 0.54)',
          data: ds
        });
        this.chart = new ChartOptions(data);
      } else {
        console.log('Error>> getMonthIcom>> ' + montos.mensaje);
      }
    });
  }

  private getDetalles(feDesde, feHasta) {
    this.loading_pg = true;

    this.pagoService.getByRango(feDesde, feHasta).subscribe((pagos: any) => {
      if (pagos.success) {
        let sum = 0;

        this.pagos = pagos.data;

        for (let i = 0; i < this.pagos.length; i++) {
          sum += this.pagos[i].monto;
        }

        this.totalPagos = sum;
      } else {
        console.log('Error>> getDetalles>> ' + pagos.mensaje);
      }
      this.loading_pg = false;
    });
  }

  private genCeros(feDesde: Date, feHasta: Date): any {
    const dataset = [];

    let aux = feDesde.getMonth();
    aux = feHasta.getMonth();
    aux = feDesde.getFullYear();
    aux = feHasta.getFullYear();

    dataset.push({ monto: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear() });

    while (feDesde.getMonth() !== feHasta.getMonth() || feDesde.getFullYear() !== feHasta.getFullYear()) {
      feDesde.setMonth(feDesde.getMonth() + 1);
      dataset.push({ monto: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear() });
    }

    return dataset;
  }
}
