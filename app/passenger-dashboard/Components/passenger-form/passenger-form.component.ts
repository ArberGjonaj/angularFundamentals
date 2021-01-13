import { Component,Input } from '@angular/core';
import { Passenger } from '../../Models/passenger.interface';

@Component({
    selector: `passenger-form`,
    styleUrls: [`[passenger-form.component.scss]`],
    template:`
    <form #form="ngForm" novalidate>
     {{detail |json}}
    <div>
     Passenger name:
     <input
     type="text"
     name="fullname"
     [ngModel]="detail?.fullname">
     </div>

     <div>
     Passenger Id:
     <input
     type="number"
     name="Id"
     [ngModel]="detail?.id">
     </div>

     {{form.value|json}}
    </form>

    `
})

export class PassengerFormComponent{
  @Input()
    detail:Passenger;
}
