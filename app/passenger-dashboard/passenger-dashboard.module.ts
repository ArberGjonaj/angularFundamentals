import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
//Components
import { PassengerDetailComponent } from './Components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './Components/passenger-count/passenger-count.component';

@NgModule({
  declarations:[
  PassengerDashboardComponent,
  PassengerDetailComponent,
  PassengerCountComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule{}
