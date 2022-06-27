import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CorePageComponent} from "./pages/core-page/core-page.component";

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
