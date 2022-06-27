import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { AddEmployeePageComponent } from './pages/add-employee-page/add-employee-page.component';
import { EditEmloyeePageComponent } from './pages/edit-employee-page/edit-emloyee-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';



@NgModule({
  declarations: [
    EmployeeFormComponent,
    AddEmployeePageComponent,
    EditEmloyeePageComponent,
    EmployeePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
