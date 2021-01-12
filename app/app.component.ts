import { Component } from "@angular/core";

interface Child{
  name:string,
  age:number
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number | null;
  children: Child[]|null;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
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
  `,
})
export class AppComponent {
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
