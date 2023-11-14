import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public dataUsuarios = [
    { semana: 'Semana 1', usuarios: 15 },
    { semana: 'Semana 2', usuarios: 25 },
    { semana: 'Semana 3', usuarios: 35 },
    { semana: 'Semana 4', usuarios: 70 }
  ];

  public chartType = 'line';
  public chartData: any[] = [
    { data: this.dataUsuarios.map(data => data.usuarios), label: 'Usuários' }
  ];
  public chartLabels: string[] = this.dataUsuarios.map(data => data.semana);
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

  constructor() {}

}
