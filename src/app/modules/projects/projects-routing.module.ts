import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";
import {EditProjectPageComponent} from "./pages/edit-project-page/edit-project-page.component";
import {AddProjectPageComponent} from "./pages/add-project-page/add-project-page.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectPageComponent
  },
  {
    path: 'edit/:id',
    component: EditProjectPageComponent
  },
  {
    path: 'add',
    component: AddProjectPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
