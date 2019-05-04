import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSectionService } from './member-section-service/member-section.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee-service/employee.service';
import { DashboardService } from './home-service/dashboard.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    MemberSectionService,
    EmployeeService,
    DashboardService
  ]
})
export class CoreDataModule {}
