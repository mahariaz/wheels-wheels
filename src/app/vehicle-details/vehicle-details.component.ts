import { Component, OnInit,Input } from '@angular/core';
import { Vehicle } from 'src/app/vehicle-list/vehicle';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input() vehicle?: Vehicle;
  public vehicleId:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.vehicleId=id;
  

  }

}
