import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material';
import { EmployeeSectionRoutingModule } from './employee-section-routing.module';
import { EmployeeSectionComponent } from './employee-section.component';

@NgModule({
  declarations: [
    EmployeeSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EmployeeSectionRoutingModule,
  ]
})
export class EmployeeSectionModule { }
