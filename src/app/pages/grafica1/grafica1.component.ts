import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public data: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [{ data: [12, 15, 100] }],
  };
}
