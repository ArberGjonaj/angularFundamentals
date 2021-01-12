import { Component, Input } from '@angular/core';
//interface
import { Passenger } from './../../Models/passenger.interface';

@Component({
 selector:'passenger-count',
 template:`
 <div>
 <h3>Airline Passengers!</h3>
 <div>
   Totale Checked in: {{checkedInCount()}}/{{items.length}}
 </div>
 </div>
 `
})
export class PassengerCountComponent{
  @Input()
  items:Passenger[];
  checkedInCount():number{
    if(!this.items) return;
    return this.items.filter((passenger: Passenger)=>{return passenger.checkedIn;}).length;
  }
}
