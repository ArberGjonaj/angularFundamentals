import { Passenger } from "./../../Models/passenger.interface";
import { Component,Input } from "@angular/core";

@Component({
  selector: "passenger-detail",
  styleUrls:['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      {{ detail.fullname }}
      <div class="date">
        Check in date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: "yMMMd" | uppercase)
            : "Not checked In"
        }}
      </div>
    </div>
  `,
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  constructor() {}
}
