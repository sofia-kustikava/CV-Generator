import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth/auth.guard";
import {AUTH_PATH} from "./shared/constants/router-path.const";

const routes: Routes = [
  {path: AUTH_PATH.path,  loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'core', canActivate: [AuthGuard], loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
