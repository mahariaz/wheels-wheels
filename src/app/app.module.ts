import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    VehicleDetailsComponent
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
