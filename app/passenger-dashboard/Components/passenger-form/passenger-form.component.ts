import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Passenger } from '../../Models/passenger.interface';
import {Baggage} from '../../Models/baggage.interface'
@Component({
    selector: `passenger-form`,
    styleUrls: ['passenger-form.component.scss'],
    template:`
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>

    <div>
     Passenger name:
     <input
     type="text"
     name="fullname"
     required
     #fullname="ngModel"
     [ngModel]="detail?.fullname"
    ><div *ngIf="fullname.errors?.required && fullname.touched" class="error">
      Passanger Name is Required
    </div>
     </div>

     <div>
     Passenger Id:
     <input
     type="number"
     name="id"
     required
     #id="ngModel"
     [ngModel]="detail?.id">
     <div *ngIf="id.errors?.required && id.dirty" class="error">
      Passanger Id is Required
    </div>
     </div>


      <div>

      <label>
      <input
      type="checkbox"
      name="checkedIn"
      [ngModel]="detail?.checkedIn"
      (ngModelChange)="toggleCheckIn($event)">
      </label>

      </div>
      <div *ngIf="form.value.checkedIn">
        Check In Date:
        <input
     type="number"
     name="checkInDate"
     [ngModel]="detail?.checkInDate">
      </div>

      <div>
      Luggage:
      <select
      name="baggage"
      [ngModel]="detail?.baggage">
        <option
        *ngFor="let item of baggage"
        [value]="item.key"
        [selected]="item.key===detail?.baggage">
          {{item.value}}
</option>
</select>

<!-- <select
      name="baggage"
      [ngModel]="detail?.baggage">
        <option
        *ngFor="let item of baggage"
        [ngValue]="item.key">

          {{item.value}}
</option>
</select> -->

     </div>

     <button type="submit" [disabled]="form.invalid">
       Update Passanger
     </button>
    </form>

    `
})

export class PassengerFormComponent{

  @Input()
    detail:Passenger;
  @Output()
  update:EventEmitter<Passenger> = new EventEmitter<Passenger>();
    baggage:Baggage[]=[{
      key:"none",
      value:"No baggage"
    },
    {
      key:"hand-only",
      value:"hand baggage"
    },{
      key:"hold-only",
      value:"Hold baggage"
    },{
      key:"hand-hold",
      value:"Hand and hold baggage"
    },]

    toggleCheckIn(checkedIn:boolean){
      if(checkedIn){
        this.detail.checkInDate=Date.now()
      }
    }
    handleSubmit(passenger:Passenger,isValid:boolean){
      if(isValid){
this.update.emit(passenger)
      }
    }
}
