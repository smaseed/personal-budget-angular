import { AfterViewInit, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements AfterViewInit{

  public dataSource = {
    datasets: [
        {
            data: [1],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#dd6c45',
                '#cc4156',
                '#564156'
            ]
        }
    ],
    labels: ['a']
  };

  constructor(private http:HttpClient) { }

  ngAfterViewInit(): void {
      this.http.get('http://127.0.0.1:3000/budget')
      .subscribe( (res: any) => {

        for (var i=0; i < res.myBudget.length; i++){
            this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
            this.dataSource.labels[i] = res.myBudget[i].title;
        }
        console.log(this.dataSource);
        this.createChart();
      });
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
    // const myPieChart = new Chart('myChart', {
    //   type: 'pie',
    //   data: this.dataSource
    // });
  }
}
