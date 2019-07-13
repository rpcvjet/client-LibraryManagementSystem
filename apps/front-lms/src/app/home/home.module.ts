import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { MaterialModule } from '@front-lms/material/src';

@NgModule({
  declarations: [HomeComponent, DashboardListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
