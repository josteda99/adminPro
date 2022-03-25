import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  @Input() titulo = '';
  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
}
