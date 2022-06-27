import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreFormComponent} from "./components/core-form/core-form.component";
import {CorePageComponent} from "./pages/core-page/core-page.component";



@NgModule({
  declarations: [
    CoreFormComponent,
    CorePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
