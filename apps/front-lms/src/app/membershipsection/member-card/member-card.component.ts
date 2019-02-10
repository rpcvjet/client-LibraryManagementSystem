import { Component, Input, ViewChild } from '@angular/core';
import { Member } from '@front-lms/core-data/src';
import { Validators } from '@angular/forms';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { FieldConfig} from '@front-lms/components/field.interface';


@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {
  currentMember: Member;
  panelOpenState = false;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @Input() members: Member[];
  @Input() set chosenMember(value) {
    this.currentMember = Object.assign({}, value);
  }

  constructor() {}


  regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
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
    }
  ];
}

