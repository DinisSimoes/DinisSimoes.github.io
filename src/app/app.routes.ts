import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageLabComponent } from './page-lab/page-lab.component';

export const routes: Routes = [
     { path: '', component: HomePageComponent },
     { path: 'sobre', component: PageAboutComponent },
     { path: 'servicos', component: PageLabComponent },
     { path: 'contato', component: PageAboutComponent },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
