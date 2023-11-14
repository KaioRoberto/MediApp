import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public dataUsuarios: { semana: string, usuarios: number }[] = [];
  public chartType = 'line';
  public chartData: any[] = [];
  public chartLabels: string[] = [];
  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  constructor() {
    this.dataUsuarios = [
      { semana: 'Semana 1', usuarios: 15 },
      { semana: 'Semana 2', usuarios: 25 },
      { semana: 'Semana 3', usuarios: 35 },
      { semana: 'Semana 4', usuarios: 70 }
    ];

    this.chartData = this.dataUsuarios.map(data => ({
      data: [data.usuarios],
      label: data.semana
    }));

    this.chartLabels = this.dataUsuarios.map(data => data.semana);
  }
}
