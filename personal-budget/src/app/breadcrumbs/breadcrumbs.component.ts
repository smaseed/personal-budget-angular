import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent implements OnInit{
  constructor( private activatedRoute: ActivatedRoute) { }
  public routePath = 'PersonalBudgetApp/';

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      console.log(data['breadcrumbs']);
      for(var i=0; i < data['breadcrumbs'].length; i++){
        this.routePath += data['breadcrumbs'][i];
        this.routePath += '/';
      }
    })
  }
}
