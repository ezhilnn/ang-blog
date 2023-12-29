import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private router:Router){}
  loggedIn=true;
  contact(){
    this.router.navigate(['/contact']);
  }
  terms(){
    this.router.navigate(['/terms-condition']);
  }
  about(){
    this.router.navigate(["/about-us"]);
  }
  logIn(){
    this.router.navigate(["/logIn"]);
  }
  log(){
    this.loggedIn=!this.loggedIn;
  }
}
