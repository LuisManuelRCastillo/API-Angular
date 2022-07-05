import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CategoryComponent } from './category/category.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'category', component:CategoryComponent},
  {path:'department', component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
