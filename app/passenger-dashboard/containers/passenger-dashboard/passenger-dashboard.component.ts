import { Passenger } from "./../../Models/passenger.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
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
  constructor() {}
  ngOnInit() {
    console.log("ngOnInit");
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkInDate: 15135125454235,
        children: [
          { name: "bob", age: 3 },
          { name: "PopMonster", age: 12 },
        ],
      },
      {
        id: 2,
        fullname: "Rose",
        checkedIn: false,
        checkInDate: null,
        children: [{ name: "bob", age: 3 }],
      },
      {
        id: 3,
        fullname: "Arber",
        checkedIn: true,
        checkInDate: 15135125454235,
        children: null,
      },
      {
        id: 4,
        fullname: "Renald",
        checkedIn: false,
        checkInDate: null,
        children: null,
      },
      {
        id: 5,
        fullname: "Fabjola",
        checkedIn: true,
        checkInDate: 15135125454235,
        children: null,
      }];
  }
  handleRemove(event){
  console.log(event)
  }
  handleEdit(event){
    console.log(event)
    }
}
