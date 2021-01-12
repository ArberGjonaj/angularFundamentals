import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?:number|null;
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
         <p>{{ Passenger | json }}</p>
         <div class="date" >
           Check in date: {{Passenger.checkInDate ? (Passenger.checkInDate | date:'yMMMd' | uppercase):('Not checked In')}}
         </div>
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
      checkInDate: 15135125454235,
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkInDate: null,
    },
    {
      id: 3,
      fullname: "Arber",
      checkedIn: true,
      checkInDate: 15135125454235,
    },
    {
      id: 4,
      fullname: "Renald",
      checkedIn: false,
      checkInDate: null,
    },
    {
      id: 5,
      fullname: "Fabjola",
      checkedIn: true,
      checkInDate: 15135125454235,
    },
  ];
}
