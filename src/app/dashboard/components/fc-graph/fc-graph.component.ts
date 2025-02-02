import { AfterViewInit, Component, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fc-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fc-graph.component.html',
  styleUrls: ['./fc-graph.component.scss']
})
export class FcGraphComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  pieChart: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            data: [12, 19, 3, 17, 28, 24],
          },
        ],
        labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
      },
    });
  }

}
