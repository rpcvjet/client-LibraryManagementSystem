import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipRoutingModule } from './membership-routing.module';
import { MemberShipComponent } from './membership.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material';
import { AddMemberFormComponent } from './add-member-form/add-member-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFilterPipe } from './member-filter.pipe';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MemberSectionService } from '@front-lms/core-data/src';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MemberShipComponent,
    AddMemberFormComponent,
    MemberListComponent,
    MemberFilterPipe,
    MemberDetailComponent
  ],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    HttpClientModule
  ],
  entryComponents: [AddMemberFormComponent],
  providers: [MemberSectionService]
})
export class MemberShipModule {}
