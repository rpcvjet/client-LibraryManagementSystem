import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberShipComponent } from './membership.component';

const routes: Routes = [
  {path: '', component: MemberShipComponent},
  {path: '', component: MemberCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
