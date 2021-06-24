import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'results',component:ResultsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
