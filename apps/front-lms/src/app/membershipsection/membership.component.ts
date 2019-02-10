import { Component, OnInit} from '@angular/core';
import { MemberSectionService, Member } from '@front-lms/core-data';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MemberShipComponent implements OnInit {

  user: Member[];
  chosenMember: Member;
  constructor(private memberService: MemberSectionService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getAll().subscribe( users => {
      this.user = users;
      this.memberService.memberData = users;
    });
  }

  onSelectedFilter(e) {
    this.getFilteredExpenseList();
    this.user = this.memberService.memberData;
  }

  getFilteredExpenseList() {
    if (this.memberService.searchOption.length > 0) {
      this.user = this.memberService.filteredListOptions();
    } else {
      this.user = this.memberService.memberData;
    }
  }

  selectMember (member) {
    this.chosenMember = member;
  }

}
