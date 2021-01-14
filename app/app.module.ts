import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,
    //costum modules
    PassengerDashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
