import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3 [innerHTML]="title"></h3>
      <h1>{{ title }}</h1>
      <img [src]="logo" />
      <input type="text" [value]="name" />
      <div>{{name}}</div>
    </div>
  `,
})
export class AppComponent {
  groceries: string[];
  title: string;
  name: string = "Todd";
  logo: string = "../Img/angular.png";
  isHappy: boolean = false;
  number1: number = 1;
  number2: number = 2;
  constructor() {
    this.title = "Ultimate Angular";
  }
}
