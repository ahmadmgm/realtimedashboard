import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-live-w-trend-widget',
  templateUrl: './live-w-trend-widget.component.html',
  styleUrls: ['./live-w-trend-widget.component.scss']
})
export class LiveWTrendWidgetComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart1", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM',
          '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'],
          
        datasets: [
          {
            label: "Green Zone",
            data: ['5', '10', '30', '40', '50',
              '60', '70','80','40','100','110','60'],
            backgroundColor: 'rgba(242, 102, 102, 0.2)',
            borderColor: 'rgba(218, 119, 57, 1)',
            fill: false,
            
          },
          {
            label: "Red Zone",
            data: ['90', '20', '30', '40', '50',
              '60', '70','80','90','100','110','50'],
            backgroundColor: 'rgba(242, 102, 102, 0.2)',
            borderColor: 'rgba(188, 76, 52, 1)',
            fill: false,
            
          },
          {
            label: "Amber Zone",

            data: ['30', '20', '30', '40', '50',
              '60', '70','80','90','100','110','120'],
            backgroundColor: 'rgba(242, 102, 102, 0.2)',
            borderColor: 'rgba(102, 192, 136, 1)',
            fill: false,
            
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
            display: true,
            grid: {
              display: true,
              color: "rgba(255,99,132,0.2)",
              
            },
            border: {
              display: true,
            },
            
            
          },
          x: {
            display: true,
            grid: {
              display: true
            }
          }
        }
      }
      });
  }

}
