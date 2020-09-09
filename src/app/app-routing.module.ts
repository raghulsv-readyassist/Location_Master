import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddlocComponent } from './geofence/form/addloc/addloc.component';
import { ViewlocComponent } from './geofence/form/viewloc/viewloc.component';


const routes: Routes = [
  { path: '', redirectTo: '/addloc', pathMatch: 'full' },
  { path: 'addloc', component:  AddlocComponent},
  { path: 'viewloc', component:  ViewlocComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
