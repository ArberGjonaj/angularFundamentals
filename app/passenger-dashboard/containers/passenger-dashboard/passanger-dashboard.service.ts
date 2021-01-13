import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import { Passenger } from "./../../Models/passenger.interface";
const PASSENGER_API:string = "api/passengers";
@Injectable()
export class PassangerDasboardService {
  constructor(private http: Http) {}
  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).map((response: Response) => {
      return response.json();
    });
  }

  updatePassenger(passenger:Passenger): Observable<Passenger> {
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`,passenger)
    .map((response: Response) => {
      return response.json();
    });
  }

  removePassenger(passenger:Passenger): Observable<Passenger> {
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`,)
    .map((response: Response) => {
      return response.json();
    });
  }

}