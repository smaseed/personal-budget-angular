import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  public d3Data:any;
  public d3Colors = ['#ffcd56','#ff6384','#36a2eb', '#fd6b19', '#dd6c45', '#cc4156', '#564156'];
  public budgetData = {
    datasets: [
        {
            data: [],
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
    labels: []
  };

  constructor(public http:HttpClient) {
    if(this.budgetData.datasets[0].data.length === 0){
      this.budgetData = this.loadBudgetData();
      this.d3Data = this.budgetData.labels.map((label, index) => ({
        name: label,
        //@ts-ignore
        value: this.budgetData.datasets[0].data[index].toString(), // Convert value to string
        color: this.d3Colors[index]
      }));
      console.log(this.budgetData.datasets[0].data);
    }
  }

  public getDataforD3Chart(){
    if (this.budgetData.datasets[0].data && this.budgetData.datasets[0].data.length === 0) {
      this.d3Data = this.budgetData.labels.map((label, index) => ({
        name: label,
        //@ts-ignore
        value: this.budgetData.datasets[0].data[index].toString(), // Convert value to string
        color: this.d3Colors[index]
      }));
      return this.d3Data;
    } else {
      console.log('Using cached data')
      return this.d3Data;
    }
  }

  loadBudgetData(){
    this.http.get('http://127.0.0.1:3000/budget')
      .subscribe( (res: any) => {
        for (let i = 0; i < res.myBudget.length; i++) {
          //@ts-ignore
          this.budgetData.datasets[0].data[i] = res.myBudget[i].budget;
          //@ts-ignore
          this.budgetData.labels[i] = res.myBudget[i].title;
        }
      });
      return this.budgetData;
  }

}
