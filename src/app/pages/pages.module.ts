import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
