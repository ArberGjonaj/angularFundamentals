import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { PassangerDasboardService } from "./../passenger-dashboard/passanger-dashboard.service";

import { Passenger } from "./../../Models/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <div>
      <button (click)="goBack()" >&lsaquo; Go Back!</button>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassangerDasboardService
  ) {}
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => {
        return this.passengerService.getPassenger(data.id);
      })
      .subscribe((data: Passenger) => {
        this.passenger = data;
      })
  }
  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
  goBack(){
    this.router.navigate(['/passengers'])
  }
}
