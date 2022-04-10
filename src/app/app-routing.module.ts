import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Cmp1Component} from './cmp1/cmp1.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import { Vehicle } from 'src/app/cmp1/vehicle';
import { VEHICLES } from 'src/app/mock-vehicles';

const routes: Routes = [
  {path:'',redirectTo:'/component1',pathMatch:'full'},
  {path:'component1',component:Cmp1Component},
  { path: 'vehicle-details', component: VehicleDetailsComponent },
  {path:'component1/:id',component:VehicleDetailsComponent }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

