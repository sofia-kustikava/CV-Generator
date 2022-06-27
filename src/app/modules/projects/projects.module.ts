import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddProjectPageComponent} from './pages/add-project-page/add-project-page.component';
import {EditProjectPageComponent} from './pages/edit-project-page/edit-project-page.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';
import {ProjectFormComponent} from './components/project-form/project-form.component';


@NgModule({
  declarations: [
    AddProjectPageComponent,
    EditProjectPageComponent,
    ProjectPageComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
