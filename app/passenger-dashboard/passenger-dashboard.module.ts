import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
//Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
//Components
import { PassengerDetailComponent } from "./Components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./Components/passenger-count/passenger-count.component";
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
//Services
import { PassangerDasboardService } from "./containers/passenger-dashboard/passanger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
  ],
  imports: [CommonModule, HttpModule],
  exports: [PassengerViewerComponent],
  providers: [PassangerDasboardService],
})
export class PassengerDashboardModule {}
