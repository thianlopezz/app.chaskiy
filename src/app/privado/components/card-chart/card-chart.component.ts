import {
  Component, OnInit, ViewChild,
  Input, ElementRef, OnChanges, SimpleChanges
} from '@angular/core';
import { ChartOptions } from '../../models/chart-options';

declare var Chart: any;

@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css']
})
export class CardChartComponent implements OnInit, OnChanges {

  @ViewChild('myChart') myChart: ElementRef;
  @Input() options: ChartOptions;

  chart;
  _chart;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {

    const options = changes.options.currentValue;

    if (!this.chart) {

      this._chart = this.myChart.nativeElement.getContext('2d');

      this.chart = new Chart(
        this._chart,
        {
          'type': options.type || 'line',
          'data': options.data || {},
          'options': options.options || {}
        }
      );

    } else {
      this.chart.destroy();

      this.chart = new Chart(
        this._chart,
        {
          'type': options.type || 'line',
          'data': options.data || {},
          'options': options.options || {}
        }
      );
    }
  }

}
