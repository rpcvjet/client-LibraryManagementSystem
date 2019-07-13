import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberShipComponent } from './membership.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const routes: Routes = [
  { path: '', component: MemberShipComponent },
  { path: ':id', component: MemberDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule {}
