import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
