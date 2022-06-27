import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmployeePageComponent} from "./pages/employee-page/employee-page.component";
import {EditEmloyeePageComponent} from "./pages/edit-employee-page/edit-emloyee-page.component";
import {AddEmployeePageComponent} from "./pages/add-employee-page/add-employee-page.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeePageComponent
  },
  {
    path: 'edit/:id',
    component: EditEmloyeePageComponent
  },
  {
    path: 'add',
    component: AddEmployeePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
