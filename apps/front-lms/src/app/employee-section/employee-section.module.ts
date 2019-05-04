import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material';
import { EmployeeSectionRoutingModule } from './employee-section-routing.module';
import { EmployeeSectionComponent } from './employee-section.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

@NgModule({
  declarations: [
    EmployeeSectionComponent,
    EmployeeCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    EmployeeSectionRoutingModule,
  ]
})
export class EmployeeSectionModule { }
