import { Component, OnInit } from '@angular/core';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { AlertService, AuthenticationService,
          StatisticService, AcceptService, MessageService,
          PagoService } from '../_services/index';
import { Chart_op, CurrentMonth } from '../_models/index';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
      // other options...
      dateFormat: 'dd/mm/yyyy',
      openSelectorOnInputClick: true,
      showClearDateBtn: false
  };

  feDesde: any;
  feHasta: any;

  hbDesde: any ={};
  hbHasta: any ={};

  chart: Chart_op = new Chart_op({});
  auxMonth: CurrentMonth = new CurrentMonth();

  pagos: any[] = [];
  totalPagos: number = 0;

  constructor(private statisticService: StatisticService,
              private pagosService: PagoService) { }

  ngOnInit() {

    var date = new Date();

    this.feHasta = { date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate() },
                    _date: new Date()
                  };

    date.setMonth(date.getMonth() - 12);

    this.feDesde = { date: {
                    year: date.getFullYear(),
                    month: date.getMonth() + 1,
                    day: date.getDate() },
                    _date: date
                  };

    this.goStatistics();
  }

  onDateChanged(event: IMyDateModel, id: string){

    if(id=="D"){

      this.feDesde = { date: {
                  year: event.date.year,
                  month: event.date.month,
                  day: event.date.day },
                  _date: new Date(event.date.year, event.date.month -1, event.date.day, 0, 0, 0, 0)
                };

      this.feHasta = { date: {
                  year: this.feHasta.date.year,
                  month: this.feHasta.date.month,
                  day: this.feHasta.date.day },
                  _date: new Date(this.feHasta.date.year, this.feHasta.date.month - 1, this.feHasta.date.day, 0, 0, 0, 0)
                };
    }
    else
      if(id=="H"){

        this.feDesde = { date: {
                    year: this.feDesde.date.year,
                    month: this.feDesde.date.month,
                    day: this.feDesde.date.day },
                    _date: new Date(this.feDesde.date.year, this.feDesde.date.month -1 , this.feDesde.date.day, 0, 0, 0, 0)
                  };

        this.feHasta = { date: {
                    year: event.date.year,
                    month: event.date.month,
                    day: event.date.day },
                    _date: new Date(event.date.year, event.date.month -1, event.date.day, 0, 0, 0, 0)
                  };
      }

    this.goStatistics();
  }

  goStatistics(){

    debugger;

    if(this.feDesde._date.getTime() > this.feHasta._date.getTime()){

      this.hbDesde = { show: true, mensaje: "La fecha desde no puede ser mayor a la fecha hasta"};
      return;
    }

    this.hbDesde = { show: false };

    if(this.feHasta._date.getTime() < this.feDesde._date.getTime()){

      this.hbHasta = { show: true, mensaje: "La fecha hasta no puede ser menor a la fecha desde"};
      return;
    }

    this.hbHasta = { show: false };

    var feDesde = this.feDesde.date.day + '/' + this.feDesde.date.month + '/' + this.feDesde.date.year;
    var feHasta = this.feHasta.date.day + '/' + this.feHasta.date.month + '/' + this.feHasta.date.year;

    var ceros = this.genCeros(this.feDesde._date, this.feHasta._date);

    this.getMonthIcom(ceros, feDesde, feHasta);
    this.getDetalles(feDesde, feHasta);
  }

  private getMonthIcom(ceros, feDesde, feHasta){

      this.statisticService.getMonthIcom(feDesde, feHasta).subscribe(
          montos => {

              if(montos.success){

                  // this.reservadosDb = montos.data;
                  for(var i=0; i<montos.data.length; i++)
                    for(var j=0; j<ceros.length; j++){

                      if(ceros[j].mes == montos.data[i].mes &&
                          ceros[j].anio == montos.data[i].anio){

                          ceros[j].monto = montos.data[i].monto;
                          break;
                          }
                    }

                    var data = {
                      labels: [],
                      datasets: []
                    };

                    var ds = [];

                    for(var i=0; i<ceros.length; i++){

                      data.labels.push(this.auxMonth.meses[ceros[i].mes -1] + '/' + ceros[i].anio);
                      ds.push(ceros[i].monto);
                    }

                    data.datasets.push({label: 'Ingresos', borderColor:'#e59607',
                                        backgroundColor: 'rgba(31, 61, 76, 0.54)', data: ds,});
                    this.chart = new Chart_op(data);
              }
              else{

                console.log('Error>> getMonthIcom>> ' + montos.mensaje);
              }
      });
  }

  private getDetalles(feDesde, feHasta){

      this.pagosService.getByDate(feDesde, feHasta).subscribe(
          pagos => {

              if(pagos.success){

                let sum = 0;

                this.pagos = pagos.data;

                for(var i=0; i<this.pagos.length; i++){

                  sum+=this.pagos[i].monto;
                }

                this.totalPagos = sum;
              }
              else{

                console.log('Error>> getDetalles>> ' + pagos.mensaje);
              }
      });
  }

  private genCeros(feDesde: Date, feHasta: Date): any{

    var dataset = [];

    var aux = feDesde.getMonth();
    aux = feHasta.getMonth();
    aux = feDesde.getFullYear();
    aux = feHasta.getFullYear();

    dataset.push({monto: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear()});

    while(feDesde.getMonth() != feHasta.getMonth() ||
            feDesde.getFullYear() != feHasta.getFullYear()){

              feDesde.setMonth(feDesde.getMonth() + 1);
              dataset.push({monto: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear()});
            }

    // dataset.push({monto: 0, mes: feDesde.getMonth() + 1, anio: feDesde.getFullYear()});

    return dataset;
  }

}
