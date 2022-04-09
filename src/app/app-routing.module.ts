import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Cmp1Component} from './cmp1/cmp1.component';


const routes: Routes = [
  {path:'cmp1/cmp1/cmp1',component:Cmp1Component},
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
