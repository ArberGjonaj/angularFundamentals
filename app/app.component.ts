import { Component } from "@angular/core";
@Component({
  selector:'app-root',
  styleUrls:['app.component.scss'],
  template:`
  <div class="app" >
   {{title + "!"}}
   <div>
   {{number1+number2}}
   </div>
   <div>
   {{isHappy?':D':':('}}
   </div>
   </div>
  `
})
export class AppComponent {
  groceries: string[];
  title: string;
  isHappy:boolean=false;
  number1:number = 1;
  number2:number = 2;
  constructor() {
    this.title = "Ultimate Angular";
  }
}
