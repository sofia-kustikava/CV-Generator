import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {DashboardFormComponent} from "./components/dashboard-form/dashboard-form.component";



@NgModule({
  declarations: [
    DashboardFormComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
