import { AfterViewInit, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartItem, registerables } from 'chart.js';
import * as d3 from 'd3';
import { DataService } from '../data.service';
Chart.register(...registerables)

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit{

  public dataSource:any;
  public budgetData:any;

  constructor(dataService:DataService) { 
    this.dataSource = dataService.budgetData;
    this.budgetData = dataService.budgetData.labels.map((label, index) => {
      return {
        label: label,
        value: dataService.budgetData.datasets[0].data[index]
      };
    });
  }

  ngAfterViewInit(): void {
        console.log(this.dataSource);
        this.createChart();
  }
  
  createChart(){
    if (typeof document !== 'undefined'){
      const ctx = document.getElementById('myChart') as ChartItem;
      console.log(ctx)
      const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
      });
    }
  }
}
