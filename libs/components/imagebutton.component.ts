import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from './field.interface';

@Component({
  selector: 'app-matchip',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <button
        mat-raised-button
        color="primary"
        style="margin-bottom: 5px"
        (click)="fileInput.click()"
        #fileInput
      >
        {{ field.label }}
      </button>
      <input
        hidden
        (change)="onFileSelected($event)"
        #fileInput
        type="file"
        id="file"
        value="this.selectedFile"
      />
    </div>
  `,
  styles: []
})
export class ImageButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  selectedFile: null;
  nameOfFile: null;
  constructor() {}
  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    this.nameOfFile = event.target.files[0].name;

    console.log(this.selectedFile);
    console.log(this.nameOfFile);
  }
}
