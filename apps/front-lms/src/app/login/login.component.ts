import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig} from '@front-lms/components/field.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  regConfig: FieldConfig [] = [
    {
      type: 'input',
      label: 'Email',
      inputType: 'email',
      name: 'email',
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
          message: 'Invalid Email'
        }
      ]
    },
    {
      type: 'input',
      label: 'password',
      inputType: 'password',
      name: 'password',
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        },
      ]
    },
  ];

  ngOnInit() {
  }

  submit(value: any) {
    console.log(value);
  }

}
