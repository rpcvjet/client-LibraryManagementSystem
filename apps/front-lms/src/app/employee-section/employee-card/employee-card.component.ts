import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '@front-lms/core-data/src';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from '@front-lms/components/field.interface';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent  {
  empNumber;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @Input() employeeData: Employee[];

  constructor(public dialogRef: MatDialogRef<EmployeeCardComponent>,
              private snackBar: MatSnackBar,
              private employeeService: EmployeeService  ) { }
  employeeInput: FieldConfig[] = [
    {
      type: 'input',
      label: 'Name',
      inputType: 'text',
      name: 'name',
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
      label: 'Email Address',
      inputType: 'email',
      name: 'email',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Email Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
          message: 'Invalid email'
        }
      ]
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Password Required'
        }
      ]
    },
    // {
    //   type: 'select',
    //   label: 'Location',
    //   name: 'location',
    //   value:
    //   options: ['Home', 'Office']
    // },
    {
      type: 'button',
      label: 'Save'
    }
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(value: any) {
    this.empNumber = uuid();
    const employee_id = {'employee_id' : this.empNumber};

   const empObj =  Object.assign(value, employee_id);

   this.employeeService.createEmployee(empObj).subscribe( (res => this.employeeService.getAll()));
    this.snackBar.open('Employee Added', 'Dismiss', {
      duration: 4000
    });
    this.onNoClick();
  }
}




