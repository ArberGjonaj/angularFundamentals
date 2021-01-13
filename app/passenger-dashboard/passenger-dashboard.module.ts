import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
//Components
import { PassengerDetailComponent } from './Components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './Components/passenger-count/passenger-count.component';
//Services
import { PassangerDasboardService } from './containers/passenger-dashboard/passanger-dashboard.service';

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
  ],
  providers:[
   PassangerDasboardService
  ]
})
export class PassengerDashboardModule{}
