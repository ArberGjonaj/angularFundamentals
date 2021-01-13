import { Component, OnInit } from '@angular/core';

import { PassangerDasboardService } from './../passenger-dashboard/passanger-dashboard.service';

import { Passenger } from './../../Models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template:`
  <div>
   <passenger-form
   [detail]="passenger">
   </passenger-form>
   </div>
  `
})
export class PassengerViewerComponent implements OnInit{
  passenger:Passenger;
 constructor(private passengerService:PassangerDasboardService){}
 ngOnInit(){
   this.passengerService
   .getPassenger(1)
   .subscribe((data:Passenger)=>{
    this.passenger=data
   });

 }
}
