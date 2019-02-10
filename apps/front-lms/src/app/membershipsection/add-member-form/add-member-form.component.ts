import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig} from '@front-lms/components/field.interface';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {
  dateToday;
  empNumber;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(public dialogRef: MatDialogRef<AddMemberFormComponent>, private snackBar: MatSnackBar) { }

  regConfig: FieldConfig [] = [
    {
      type: 'input',
      label: 'Name',
      inputType: 'text',
      name: 'name',
      value: '',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only text'
        }
      ]
    },
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
    {
      type: 'select',
      label: 'Location',
      name: 'location',
      value: 'Home',
      options: ['Home', 'Office']
    },
    {
      type: 'button',
      label: 'Save'
    }
  ];

  ngOnInit() {
    this.dateToday = new Date();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(value: any) {
    this.empNumber = uuid();
    const employee_id = {'employee_id' : this.empNumber};

    Object.assign(value, employee_id);
    this.snackBar.open('Employee Added', 'Dismiss', {
      duration: 4000
    });
    this.onNoClick();
  }

}

