import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router:Router){}
  contact(){
    this.router.navigate(['/contact']);
  }
  terms(){
    this.router.navigate(['/terms-condition']);
  }
  about(){
    this.router.navigate(["/about-us"]);
  }
}
