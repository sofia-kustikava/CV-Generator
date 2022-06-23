import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmloyeeFormComponent } from './components/emloyee-form/emloyee-form.component';
import { AddEmloyeePageComponent } from './pages/add-emloyee-page/add-emloyee-page.component';
import { EditEmloyeePageComponent } from './pages/edit-emloyee-page/edit-emloyee-page.component';
import { EmloyeePageComponent } from './pages/emloyee-page/emloyee-page.component';



@NgModule({
  declarations: [
    EmloyeeFormComponent,
    AddEmloyeePageComponent,
    EditEmloyeePageComponent,
    EmloyeePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
