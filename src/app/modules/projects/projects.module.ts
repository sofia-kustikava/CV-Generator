import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProgectPageComponent } from './pages/add-progect-page/add-progect-page.component';
import { AddProjectPageComponent } from './pages/add-project-page/add-project-page.component';
import { EditProjectPageComponent } from './pages/edit-project-page/edit-project-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';



@NgModule({
  declarations: [
    AddProgectPageComponent,
    AddProjectPageComponent,
    EditProjectPageComponent,
    ProjectPageComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
