import { Component } from "@angular/core";
@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  templateUrl:`
  <div class="app" >
   {{title}}
   </div>
  `
})
export class AppComponent {
  groceries: string[];
  title: string;
  constructor() {
    this.title = "Ultimate Angular";
  }
}
