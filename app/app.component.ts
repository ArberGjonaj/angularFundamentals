import { Component } from "@angular/core";

interface Passenger{
  id:number,
  fullname:string,
  checkedIn:boolean
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let Passenger of Passengers;let i = index">
          <span
           class="status"
           [class.checked-in]="Passenger.checkedIn" ></span>
         {{i}}:{{Passenger.fullname}}
        </li>
      </ul>
      <ul>
        <li *ngFor="let Passenger of Passengers;let i = index">
          <span
           class="status"
           [ngClass]="{
             'checked-in':Passenger.checkedIn,
             'checked-out':!Passenger.checkedIn
             }"></span>
         {{i}}:{{Passenger.fullname}}
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  Passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
    },
    {
      id: 3,
      fullname: "Arber",
      checkedIn: true,
    },
    {
      id: 4,
      fullname: "Renald",
      checkedIn: false,
    },
    {
      id: 5,
      fullname: "Fabjola",
      checkedIn: true,
    },
  ];

}
