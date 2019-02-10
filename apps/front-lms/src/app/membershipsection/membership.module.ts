import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipRoutingModule } from './membership-routing.module';
import { MemberShipComponent } from './membership.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material';
import { MemberCardComponent } from './member-card/member-card.component';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';


@NgModule({
  declarations: [
    MemberShipComponent,
    MemberCardComponent,
    AddMemberFormComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    SharedModule,
    MaterialModule
  ],
  entryComponents: [
    AddMemberFormComponent
  ]
})
export class MemberShipModule { }
