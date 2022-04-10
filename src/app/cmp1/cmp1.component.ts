import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/cmp1/vehicle';
import { VEHICLES } from 'src/app/mock-vehicles';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {
  vehicles = VEHICLES;
  selectedVehicle?:Vehicle;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(vehicle: Vehicle): void {
    // this.selectedVehicle = vehicle;
    this.router.navigate(['/component1',JSON.stringify(vehicle)]);
  }
}
