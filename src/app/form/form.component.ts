import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signinForm : FormGroup; //step 3//step 4 inject form builder
  constructor() { 

    this.signinForm = new FormGroup({//building the form ,
    email : new FormControl('',[Validators.required,Validators.email]),
    pass : new FormControl('',[Validators.required])
//injecting form control
  });
  }

  ngOnInit(): void {
    alert();
  }

  signin(){
    
  }

  get email(){
    return this.signinForm.get('email');
  }
}
