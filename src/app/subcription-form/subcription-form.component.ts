import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-subcription-form',
  templateUrl: './subcription-form.component.html',
  styleUrls: ['./subcription-form.component.css']
})
export class SubcriptionFormComponent {
  form:any;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]]
    })
  }
  get fc(){
    return this.form.controls;
  }
 
  submit(){
      alert(`Thank you for subscribing us`)
  }
}
