import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';
@Component({
  selector: 'app-live-event-widget',
  templateUrl: './live-event-widget.component.html',
  styleUrls: ['./live-event-widget.component.scss']
})
export class LiveEventWidgetComponent {
  public chart: any;



  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
          
        datasets: [
          {
            label: "Sales",
            data: ['70', '80', '70', '60', '80',
              '70', '50','70','60','70', '134', '100','70','160'],
            backgroundColor: 'rgba(242, 102, 102, 0.2)',
            borderColor: 'rgba(242, 102, 102, 1)',
            fill: true,
            
          },
        ]

      },
      options: {
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
