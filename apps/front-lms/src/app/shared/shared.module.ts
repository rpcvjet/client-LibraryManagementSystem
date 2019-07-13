import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@front-lms/material';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFieldDirective } from '@front-lms/components/dynamic-field/dynamic-filed.directive';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { InputComponent } from '@front-lms/components/input.component';
import { ButtonComponent } from '@front-lms/components/button.component';
import { ImageButtonComponent } from '@front-lms/components/imagebutton.component';
import { SelectComponent } from '@front-lms/components/select.component';
import { DateComponent } from '@front-lms/components/date.component';
import { RadiobuttonComponent } from '@front-lms/components/radiobutton.component';
import { CheckboxComponent } from '@front-lms/components/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    RadiobuttonComponent,
    SelectComponent,
    CheckboxComponent,
    DateComponent,
    ImageButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    RadiobuttonComponent,
    SelectComponent,
    CheckboxComponent,
    DateComponent,
    ImageButtonComponent
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    ImageButtonComponent
  ]
})
export class SharedModule {
  static forRoot() {}
}
