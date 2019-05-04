import { Component, OnInit } from '@angular/core';
import { MemberSectionService, Member } from '@front-lms/core-data';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MemberShipComponent implements OnInit {
  members: Member[];
  chosenMember: Member;

  constructor(private memberService: MemberSectionService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getAll().subscribe((data: Member[]) => {
      this.members = data;
    });
  }

  onSelectedFilter(e) {
    this.members = this.memberService.memberData;
  }

  selectMember(member) {
    this.chosenMember = member;
  }
}
