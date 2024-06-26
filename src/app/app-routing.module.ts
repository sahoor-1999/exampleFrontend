import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { RoleNewComponent } from './component/role-new/role-new/role-new.component';
import { HomeComponent } from './component/home/home/home.component';
import { ModuleComponent } from './component/module/module/module.component';

const routes: Routes = [
  {path : 'newrole', component:RoleNewComponent},
  {path : 'home', component:HomeComponent },
  {path : 'role', component:RoleNewComponent},
  { path: 'module/:moduleName', component: ModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
