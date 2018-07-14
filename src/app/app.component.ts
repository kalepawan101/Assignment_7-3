import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  car_color =  [
        {color: 'White'},
        {color: 'Red'},
        {color: 'Grey'},
        {color: 'Black'}
    ];

}
