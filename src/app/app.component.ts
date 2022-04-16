import { Component, OnInit } from '@angular/core';
import { VEHICLES } from 'src/app/mock-vehicles';
import {Router} from '@angular/router';
import { Vehicle } from 'src/app/vehicle-list/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'i181652_MahaRiaz';



  constructor(private router:Router) { }
  ngOnInit(): void {
    
  }

}
