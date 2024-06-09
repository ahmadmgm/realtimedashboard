import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-site-board-event-widget',
  templateUrl: './site-board-event-widget.component.html',
  styleUrls: ['./site-board-event-widget.component.scss']
})

export class SiteBoardEventWidgetComponent {
  public chart: any;



  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart4", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
          
        datasets: [
          {
            backgroundColor: ['rgba(90, 145, 226, 1)', 'rgba(188, 76, 52, 1)','rgba(218, 119, 57, 1)'],
            data: [21, 79,33]
          },
          {
            backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
            data: []
          },
          {
            backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
            data: []
          },
          {
            backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            data: []
          },
          {
            backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            data: []
          },
          {
            backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
            data: []
          }
        ]

      },
      options: {
        responsive: true,
        plugins: {
          legend: {
              display: false,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      },
        maintainAspectRatio: false,
        scales: {
          y: {
            stacked: true,
            display: false,
            grid: {
              display: false,
              color: "rgba(255,99,132,0.2)",
              
            },
            border: {
              display: false,
            },
            
          },
          x: {
            display: false,
            grid: {
              display: false
            }
          }
        }
      }
      });
  }
}
