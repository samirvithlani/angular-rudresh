import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'employee';



  name: string = "samir";
  age: number = 20;
  isActive: boolean = false;

  

}
