import { Passenger } from './../../Models/passenger.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'passenger-dashboard',
  styleUrls:["passenger-dashboard.component.scss"],
  template: `
  <div>
  <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let Passenger of Passengers; let i = index">
          <span class="status" [class.checked-in]="Passenger.checkedIn"></span>
          {{ i }}:{{ Passenger.fullname }}
          <p>{{ Passenger | json }}</p>
          <div class="date">
            Check in date:
            {{
              Passenger.checkInDate
                ? (Passenger.checkInDate | date: "yMMMd" | uppercase)
                : "Not checked In"
            }}
          </div>
          <div class="children" >
           Children: {{ Passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
  </div>

  `
})
export class PassengerDashboardComponent{
  Passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkInDate: 15135125454235,
      children:[{name:"bob",age:3},{name:"PopMonster",age:12}]
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkInDate: null,
      children:[{name:"bob",age:3}]
    },
    {
      id: 3,
      fullname: "Arber",
      checkedIn: true,
      checkInDate: 15135125454235,
      children:null
    },
    {
      id: 4,
      fullname: "Renald",
      checkedIn: false,
      checkInDate: null,
      children:null
    },
    {
      id: 5,
      fullname: "Fabjola",
      checkedIn: true,
      checkInDate: 15135125454235,
      children:null
    },
  ];
}
