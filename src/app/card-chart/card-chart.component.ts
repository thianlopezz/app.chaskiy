import { Component, OnInit, Input, ViewChild, ElementRef,  SimpleChanges } from '@angular/core';
import { Chart_op } from '../_models/index';
import Chart from 'chart.js';

@Component({
  selector: 'card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit {

  @ViewChild('myChart') myChart: ElementRef;
  @Input() chart_op: Chart_op;

  chart;

  constructor() { }

  ngOnInit() {
    // let _chart = this.myChart.nativeElement.getContext('2d');

    // var data = {
    //         labels: [
    //             "Value A",
    //             "Value B"
    //         ],
    //         datasets: [
    //             {
    //                 "data": [101342, 55342],   // Example data
    //                 "backgroundColor": [
    //                     "#1fc8f8",
    //                     "#76a346"
    //                 ]
    //             }]
    //     };

    // if(this.chart_op == undefined){
    //   this.chart_op = {
    //                     type: 'line',
    //                     data: {},
    //                     options: {}
    //                   }
    // }
    //
    //   this.chart = new Chart(
    //       _chart,
    //       {
    //           "type": this.chart_op.type,
    //           "data": this.chart_op.data,
    //           "options": this.chart_op.options
    //       }
    //   );
  }

  ngOnChanges(changes: SimpleChanges) {

  debugger;

    let _chart_op = changes.chart_op.currentValue;

    if(this.chart == undefined){

      let _chart = this.myChart.nativeElement.getContext('2d');

      this.chart = new Chart(
            _chart,
            {
                "type": _chart_op.type || 'line',
                "data": _chart_op.data || {},
                "options": _chart_op.options || {}
            }
      );

    }

    this.chart.data.labels.pop();
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });

    this.chart.data = _chart_op.data;
    this.chart.update();

    // changes.chart_op.currentValue
    // this.doSomething(changes.categoryId.currentValue);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

}

}
