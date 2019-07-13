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
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { MemberSectionService } from '@front-lms/core-data/src';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: 'AIzaSyDaNxjWRwJSMy-uZDHYKICsD-AH61_cvdQ',
  authDomain: 'librarystorage-2211a.firebaseapp.com',
  databaseURL: 'https://librarystorage-2211a.firebaseio.com',
  projectId: 'librarystorage-2211a',
  storageBucket: 'librarystorage-2211a.appspot.com',
  messagingSenderId: '276919825512',
  appId: '1:276919825512:web:d671b5223aea190b'
};

firebase.initializeApp(firebaseConfig);
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule
  ],
  entryComponents: [AddMemberFormComponent],
  providers: [
    MemberSectionService
    // {
    //   provide: StorageBucket,
    //   useValue: 'gs://librarystorage-2211a.appspot.com/'
    // }
  ]
})
export class MemberShipModule {}
