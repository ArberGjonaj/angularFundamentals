import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import { Passenger } from './../../Models/passenger.interface';

@Injectable()
export class PassangerDasboardService {
  constructor(private http:Http) {}
  getPassengers():Passenger[]{
  return  [
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
      },
    ];
  }
}
