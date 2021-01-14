import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
//Containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//Components
import { PassengerDetailComponent } from "./Components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./Components/passenger-count/passenger-count.component";
import { PassengerFormComponent } from "./Components/passenger-form/passenger-form.component";
//Services
import { PassangerDasboardService } from "./containers/passenger-dashboard/passanger-dashboard.service";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      {
        path: "",
        component: PassengerDashboardComponent,
      },
      { path: ":id", component: PassengerViewerComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [PassangerDasboardService],
})
export class PassengerDashboardModule {}
