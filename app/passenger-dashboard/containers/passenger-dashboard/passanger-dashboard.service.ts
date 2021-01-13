import { Injectable } from "@angular/core";
import { Http, Response,Headers,RequestOptions } from "@angular/http";

import { Observable } from "rxjs/observable";
import "rxjs/add/operator/toPromise";
import { Passenger } from "./../../Models/passenger.interface";
const PASSENGER_API:string = "api/passengers";
@Injectable()
export class PassangerDasboardService {
  constructor(private http: Http) {}
  getPassengers(): Promise<Passenger[]> {
    return this.http
    .get(PASSENGER_API)
    .toPromise()
    .then((response: Response) => {
      return response.json();
    });
  }

  updatePassenger(passenger:Passenger): Promise<Passenger> {
    let headers=new Headers({
      "Content-Type":"Application/json"
    })
    let requestOptions=new RequestOptions({
      headers
    })
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`,passenger,requestOptions)
    .toPromise()
    .then((response: Response) => {
      return response.json();
    });
  }

  removePassenger(passenger:Passenger): Promise<Passenger> {
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`,)
    .toPromise()
    .then((response: Response) => {
      return response.json();
    });
  }

}
