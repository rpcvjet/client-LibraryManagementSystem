import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipRoutingModule } from './membership-routing.module';
import { MemberShipComponent } from './membership.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFilterPipe } from './member-filter.pipe';

@NgModule({
  declarations: [
    MemberShipComponent,
    AddMemberFormComponent,
    MemberListComponent,
    MemberFilterPipe
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [AddMemberFormComponent]
})
export class MemberShipModule {}
