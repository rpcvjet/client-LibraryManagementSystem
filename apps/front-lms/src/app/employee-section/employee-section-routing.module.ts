import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeSectionComponent} from './employee-section.component';
const routes: Routes = [
  {path: '', component: EmployeeSectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeSectionRoutingModule { }
