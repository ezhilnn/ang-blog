import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  form!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router){
    this.form=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      query:['',[Validators.required]]
    })
  }
  get fc(){
    return this.form.controls;
  }
  contact(){
    alert("Your query submitted successfully and we will contact you Soon!");
  }
  home(){
    this.router.navigate(['/'])
  }
}
