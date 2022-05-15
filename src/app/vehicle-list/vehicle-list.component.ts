import { Component, OnInit  ,VERSION, ViewChild, ElementRef  } from '@angular/core';
import { Vehicle } from 'src/app/vehicle-list/vehicle';
import { VEHICLES } from 'src/app/mock-vehicles';
// import * as $ from "jquery";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  

  vehicles = VEHICLES;
  selectedVehicle?:Vehicle;
  visible:boolean = true;
  showcars:boolean=true;
  carArray:Vehicle[] =[];
  temp1:Vehicle[] =[];
  typeSelected:boolean=false;
  makeSelected:boolean=false;
  make:string="";
  lowmil:number=0;
  highmil:number=0;
  lowp:number=0;
  highp:number=0;
  students:VehicleCollection[] = [];
  constructor(){
    this.students = []
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://localhost:3000/getStudents", requestOptions)
      .then(response => response.text())
      .then(result => {
        var json = JSON.parse(result);
        for(var i=0;i<json.length;i++){
          this.students.push(new VehicleCollection(json[i].name, json[i].make,json[i].model));
        }
      })
      .catch(error => console.log('error', error));    
  
    console.log("constructor called")
    for (let i=0;i<this.vehicles.length;i++){    
      this.carArray.push(this.vehicles[i]);
  } 
  }

onStart():void{
  

  
}
  ngOnInit(): void {

  }
  
  GetStudents(){
    this.students = [];
    var requestOptions = {
      method: 'GET',
    };
    
    fetch("http://localhost:3000/getStudents", requestOptions)
      .then(response => response.text())
      .then(result => {
        var json = JSON.parse(result);
        for(var i=0;i<json.length;i++){
          this.students.push(new VehicleCollection(json[i].name, json[i].make,json[i].model));
        }
      })
      .catch(error => console.log('error', error));    
  }
  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
    this.visible = this.visible?false:true;
  }
//   typeCheck(type:string){

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].type==type){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//     this.temp1=[];
//   return this.carArray;
//   }
//   makeCheck(make:string){


//       for (let i=0;i<this.carArray.length;i++){
//         this.temp1.push(this.carArray[i]);
//       }
//       this.carArray=[];
//       for (let i=0;i<this.temp1.length;i++){
//         if (this.temp1[i].make==make){      
//             this.carArray.push(this.temp1[i]);          
//         }
//       }
//     this.temp1=[];
//     return this.carArray;
//   }
//   modelCheck(model:string){
   

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].model==model){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
// }

//   yearCheck(year:string){
    

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].year==year){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
//   }
//   colorCheck(color:string){
    

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].color==color){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
//   }

//   engineCheck(engine:string){
    

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].engine==engine){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
//   }
//   rateCheck(rating:string){
    

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].rating==rating){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
//   }
//   cityCheck(loc:string){
    

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].loc==loc){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray;
//   }
//   lowMil(){
//     var text = $('#lowmil').find('option:selected').text();
//     this.lowmil = Number(text);
//   }
//   highMil(){
//     var text = $('#highmil').find('option:selected').text();
//     this.highmil = Number(text);
    
//   }
//   lowP(){
//     var text = $('#lowp').find('option:selected').text();
//     this.lowp = Number(text);
//   }
//   highP(){
//     var text = $('#highp').find('option:selected').text();
//     this.highp = Number(text);
    
//   }
//   mileageCheck(){

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].mileage>= this.lowmil && this.temp1[i].mileage< this.highmil ){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray; 
  
//   }
//   priceCheck(){

//     for (let i=0;i<this.carArray.length;i++){
//       this.temp1.push(this.carArray[i]);
//     }
//     this.carArray=[];
//     for (let i=0;i<this.temp1.length;i++){
//       if (this.temp1[i].price>= this.lowp && this.temp1[i].price<= this.highp ){      
//           this.carArray.push(this.temp1[i]);          
//       }
//     }
//   this.temp1=[];
//   return this.carArray; 
  
//   }
}

class VehicleCollection{
  constructor(public make:string, public name:string, public model?:number){}

  print():void{
    console.log("Student:: rollno="+this.make+" name="+this.name
    +" age="+this.model);
  }
}