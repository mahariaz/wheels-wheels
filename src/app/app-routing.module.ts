import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import { Vehicle } from 'src/app/vehicle-list/vehicle';
import { VEHICLES } from 'src/app/mock-vehicles';

const routes: Routes = [
  { path: 'vehicle-details', component: VehicleDetailsComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

