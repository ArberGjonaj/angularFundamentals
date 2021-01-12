import { Passenger } from './../../Models/passenger.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'passenger-dashboard',
  styleUrls:["passenger-dashboard.component.scss"],
  template: `
  <div>
    <passenger-count
    [items]="passengers">
    </passenger-count>

    <passenger-detail>
    </passenger-detail>
  
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}:{{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
          <div class="date">
            Check in date:
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: "yMMMd" | uppercase)
                : "Not checked In"
            }}
          </div>
          <div class="children" >
           Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
  </div>

  `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[] = [
  ];
  constructor(){

  }
  ngOnInit(){
    console.log("ngOnInit")
    this.passengers=[
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
      },]
  }
}
