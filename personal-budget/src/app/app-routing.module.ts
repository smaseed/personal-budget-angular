import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { breadcrumbs: ['HomePage']}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { breadcrumbs: ['About']}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { breadcrumbs: ['Login']}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumbs: ['Contact']}
  },
  {
    path: '**',
    component: P404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
