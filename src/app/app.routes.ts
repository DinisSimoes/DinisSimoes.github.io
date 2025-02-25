import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './UI/home-page/home-page.component';
import { PageAboutComponent } from './UI/page-about/page-about.component';
import { PageLabComponent } from './UI/page-lab/page-lab.component';
import { PageContactComponent } from './UI/page-contact/page-contact.component';

export const routes: Routes = [
     { path: '',  redirectTo: '/About', pathMatch: 'full' },
     { path: 'About', component: PageAboutComponent },
     { path: 'Lab', component: PageLabComponent },
     { path: 'Contact', component: PageContactComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
