import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-front',
  templateUrl: './chart-front.component.html',
  styleUrls: ['./chart-front.component.css']
})
export class ChartFrontComponent{

  // Doughnut
  public doughnutChartLabels:string[] = ['CSS4.1%','TypeScript 69%', 'HTML 22.1%', 'JavasScript 3.9%'];
  public doughnutChartData:number[] = [4.1 ,69, 22.1,3.9];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}

