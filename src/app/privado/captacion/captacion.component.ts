import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { ChartOptions } from '../models/chart-options';
import { CurrentMonth } from '../models/current-month';
import { EstadisticaService } from '../services/estadistica.service';

import * as moment from 'moment';

@Component({
  selector: 'app-captacion',
  templateUrl: './captacion.component.html',
  styleUrls: ['./captacion.component.css']
})
export class CaptacionComponent implements OnInit {

  loading_pg = true;

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
    openSelectorOnInputClick: true,
    showClearDateBtn: false
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

  captacion: any = {};

  constructor(private estadisticaService: EstadisticaService) { }

  ngOnInit() {

    this.getDatos();
  }

  getDatos() {

    this.estadisticaService.getCaptacion().subscribe(
      captacion => {

        if (captacion.success) {
          this.captacion = captacion.data;
          this.goStatistics();
        } else {
          console.log('Error>> getDatos>> ' + captacion.mensaje);
        }
      });
  }

  onDateChanged(event: IMyDateModel, id: string) {

    if (id === 'D') {

      this.feDesde = {
        date: {
          year: event.date.year,
          month: event.date.month,
          day: event.date.day
        },
        _date: new Date(event.date.year, event.date.month - 1, event.date.day, 0, 0, 0, 0)
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
          year: event.date.year,
          month: event.date.month,
          day: event.date.day
        },
        _date: new Date(event.date.year, event.date.month - 1, event.date.day, 0, 0, 0, 0)
      };
    }
// FIXME: evitar que cargue datos si esta erronea una fecha
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

    const datasets = [];

    const setTotal = {
      label: 'Total',
      data: [],
      type: 'line',
      borderColor: '#e59607'
    };

    ceros.forEach(cero => {
      const total = this.captacion.totalPorMes.find(x => x.mes === cero.mes && x.anio === cero.anio);
      if (total) {
        setTotal.data.push(total.valor);
      } else {
        setTotal.data.push(0);
      }
    });

    datasets.push(setTotal);

    this.captacion.fuentes.forEach(fuente => {

      const set = {
        label: fuente.fuente,
        data: [],
        borderColor: 'rgba(31, 61, 76, 0.54)',
        backgroundColor: 'rgba(31, 61, 76, 0.54)'
      };

      ceros.forEach(cero => {
        const fuenteCaptacion = this.captacion.porFuente.find(x => x.idFuente === fuente.idFuente
          && x.mes === cero.mes && x.anio === cero.anio);
        if (fuenteCaptacion) {
          set.data.push(fuenteCaptacion.valor);
        } else {
          set.data.push(0);
        }
      });

      datasets.push(set);
    });

    const labels = [];

    for (let i = 0; i < ceros.length; i++) {

      labels.push(this.auxMonth.meses[ceros[i].mes - 1] + '/' + ceros[i].anio);
    }

    const data = {
      datasets,
      labels
    };

    this.chart = new ChartOptions(data, 'bar');
  }

  private getOcupacion(ceros, feDesde, feHasta) {

    this.estadisticaService.getOcupacionPorRango(feDesde, feHasta).subscribe(
      ocupaciones => {

        if (ocupaciones.success) {

          for (let i = 0; i < ocupaciones.data.length; i++) {
            for (let j = 0; j < ceros.length; j++) {

              if (ceros[j].mes === ocupaciones.data[i].mes &&
                ceros[j].anio === ocupaciones.data[i].anio) {

                ceros[j].ocupacion = ocupaciones.data[i].ocupacion;
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
            ds.push(ceros[i].ocupacion);
          }

          data.datasets.push({
            label: 'Ocupación', borderColor: '#e59607',
            backgroundColor: 'rgba(31, 61, 76, 0.54)', data: ds
          });
          this.chart = new ChartOptions(data);
        } else {

          console.log('Error>> getOcupacion>> ' + ocupaciones.mensaje);
        }
      });
  }

  private genCeros(feDesde: Date, feHasta: Date): any {

    const dataset = [];

    let aux = feDesde.getMonth();
    aux = feHasta.getMonth();
    aux = feDesde.getFullYear();
    aux = feHasta.getFullYear();

    dataset.push({ valor: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear() });

    while (feDesde.getMonth() !== feHasta.getMonth() ||
      feDesde.getFullYear() !== feHasta.getFullYear()) {

      feDesde.setMonth(feDesde.getMonth() + 1);
      dataset.push({ valor: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear() });
    }

    return dataset;
  }

}

