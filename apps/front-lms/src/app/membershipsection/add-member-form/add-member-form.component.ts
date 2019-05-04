import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from '@front-lms/components/field.interface';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { MemberSectionService } from '@front-lms/core-data/src';

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {
  dateToday;
  memberNumber;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(
    public dialogRef: MatDialogRef<AddMemberFormComponent>,
    private snackBar: MatSnackBar,
    private memberService: MemberSectionService
  ) {}

  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Name',
      inputType: 'text',
      name: 'member_name',
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
          validator: Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
          ),
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
        }
      ]
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
    this.memberNumber = uuid();
    const memberNumber = { memberNumber: this.memberNumber };

    Object.assign(value, memberNumber);
    this.snackBar.open('Employee Added', 'Dismiss', {
      duration: 4000
    });
    console.log('value', value);
    this.onNoClick();
  }
}
