import { Component, OnInit, ViewChild,
          Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions } from '../../models/chart-options';
import Chart from 'chart.js';

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit, OnChanges {

  @ViewChild('myChart') myChart: ElementRef;
  @Input() options: ChartOptions;

  chart;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {

    const options = changes.options.currentValue;

    if (this.chart === undefined) {

      const _chart = this.myChart.nativeElement.getContext('2d');

      this.chart = new Chart(
            _chart,
            {
              'type': options.type || 'line',
              'data': options.data || {},
              'options': options.options || {}
            }
      );

    }

    this.chart.data.labels.pop();
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });

    this.chart.data = options.data;
    this.chart.update();
}

}
