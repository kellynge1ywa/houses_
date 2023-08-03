import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { Property } from './components/property/property.component';
import { AddProperty } from './components/property/add-property/add-property.component';
import { DetailsComponent } from './components/property/details/details.component';

const routes: Routes = [
  {path:'',component:Home},
  {path:'property',component:Property},
  {path:'property/addProperty', component:AddProperty},
  {path:'property/details/:Id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
