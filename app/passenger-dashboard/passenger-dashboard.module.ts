import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
  PassengerDashboardComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule{}
