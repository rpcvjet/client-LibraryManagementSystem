import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeSectionComponent} from './employee-section.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';

const routes: Routes = [
  {path: '', component: EmployeeSectionComponent},
  {path: '', component: EmployeeCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeSectionRoutingModule { }
