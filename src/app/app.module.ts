import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
