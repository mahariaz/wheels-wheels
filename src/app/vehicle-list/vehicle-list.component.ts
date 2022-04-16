import { Component, OnInit  ,VERSION, ViewChild, ElementRef  } from '@angular/core';
import { Vehicle } from 'src/app/vehicle-list/vehicle';
import { VEHICLES } from 'src/app/mock-vehicles';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  
  @ViewChild('my') nbOfItems:any; 

ngAfterViewInit() {
  console.log(this.nbOfItems.nativeElement.value);
}
  vehicles = VEHICLES;
  selectedVehicle?:Vehicle;
  visible:boolean = true;
  showcars:boolean=true;
  carArray:Vehicle[] =[];
  carSelected:boolean=false;
  constructor() {
    for (let i=0;i<this.vehicles.length;i++){    
      this.carArray.push(this.vehicles[i]);
  }   

 }
onStart():void{
  
  
}
  ngOnInit(): void {

  }
  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.visible = this.visible?false:true;
  }
  showCars(va:string): Vehicle[]{
  
    
    if (va=='car'){
      this.carSelected=true;
      this.carArray =[];
      this.showcars = this.showcars?false:true;
      for (let i=0;i<this.vehicles.length;i++){
        if (this.vehicles[i].type=='car'){
          this.carArray.push(this.vehicles[i]);

        }
      }  
  }
  if (va=='bike'){
    this.carArray =[];
    this.showcars = this.showcars?false:true;
    for (let i=0;i<this.vehicles.length;i++){
      if (this.vehicles[i].type=='bike'){
        this.carArray.push(this.vehicles[i]);

      }
    }
    if(this.carSelected==true){
      for (let i=0;i<this.vehicles.length;i++){
        if (this.vehicles[i].type=='car'){
          this.carArray.push(this.vehicles[i]);
  
        }
      }

    }
}
    return this.carArray;
  }


}
