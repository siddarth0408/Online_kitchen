import { Component } from '@angular/core';
import { NavbarComponent } from './FrontPage/Navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodpoint';
  navbar: NavbarComponent = new NavbarComponent;
  
}
