import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
