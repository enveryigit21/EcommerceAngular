import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/HomePage/home/home.component';
import { ApiComponent } from './Components/HomePage/api/api.component';
import { CategoryComponent } from './Components/HomePage/categorys/category/category.component';

const routes: Routes = [
  {path:"/" , redirectTo:"full", component:HomeComponent ,
  children: [
    {path:"api", component:ApiComponent},
    {path:"filtered", component:CategoryComponent}
  ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
