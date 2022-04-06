import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/sharedSer/stats/stats.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chart1: any
  chart2: any
  constructor(private stats: StatsService) { }

  ngOnInit(): void {
    this.chart1 = new Chart('canvas', {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue','Yellow','Green','Orange','Lime'],
        datasets: [{
          label: 'Demo data',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgb(255, 99, 132)',
          borderWidth: 1
        }]
      }
    });

    this.chart2 = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue','Yellow','Green','Orange','Lime'],
        datasets: [{
          label: 'Demo data',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgb(75, 192, 192)',
          borderWidth: 1
        }]
      }
    });

    this.chart2 = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue','Yellow','Green','Orange','Lime'],
        datasets: [{
          label: 'Demo data',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(102,13,123,14)',
          borderWidth: 1
        }]
      }
    });
  }

}
