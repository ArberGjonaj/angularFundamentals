import { Injectable } from "@angular/core";
import { Http, Response,Headers,RequestOptions } from "@angular/http";

import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Passenger } from "./../../Models/passenger.interface";
const PASSENGER_API:string = "api/passengers";
@Injectable()
export class PassangerDasboardService {
  constructor(private http: Http) {}
  getPassengers(): Observable<Passenger[]> {
    return this.http
    .get(PASSENGER_API)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error:any)=> Observable.throw(error.json()))
  }

  updatePassenger(passenger:Passenger): Observable<Passenger> {
    let headers=new Headers({
      "Content-Type":"Application/json"
    })
    let requestOptions=new RequestOptions({
      headers
    })
    return this.http
    .put(`${PASSENGER_API}/${passenger.id}`,passenger,requestOptions)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error:any)=> Observable.throw(error.json()))

  }

  removePassenger(passenger:Passenger): Observable<Passenger> {
    return this.http
    .delete(`${PASSENGER_API}/${passenger.id}`,)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error:any)=> Observable.throw(error.json()))

  }

}
