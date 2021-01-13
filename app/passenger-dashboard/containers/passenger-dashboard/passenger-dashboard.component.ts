import { Passenger } from "./../../Models/passenger.interface";
import { Component, OnInit } from "@angular/core";
import { PassangerDasboardService } from "./passanger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
      <passenger-count [items]="passengers"> </passenger-count>

      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];
  constructor(private passengerService: PassangerDasboardService) {}
  ngOnInit() {
    console.log("ngOnInit");
    this.passengerService
    .getPassengers()
    .subscribe((data:Passenger[])=>{
      this.passengers=data;
      console.log(data)
    })
    ;
  }

  handleEdit(event) {
    this.passengerService
    .updatePassenger(event)
    .subscribe((data:Passenger)=>{
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;  });
    })
 }




  handleRemove(event) {
    this.passengerService
    .removePassenger(event)
    .subscribe((data:Passenger)=>{
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    })

  }

}
