import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member, MemberSectionService } from '@front-lms/core-data';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  displayedMember: Member;
  chosenMember: Member;
  bookData: any[];
  @Output() update = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberSectionService
  ) {}

  ngOnInit() {
    this.loadMemberData();
  }

  updateMember(member) {
    this.memberService.updateMemberForm(member).subscribe(() => {});
  }

  loadMemberData() {
    const Memberid = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMemberbyId(Memberid).subscribe((data: Member) => {
      this.displayedMember = data[0];
    });
    this.memberService
      .getCheckedOutBooksByMember(Memberid)
      .subscribe((data: any) => {
        this.bookData = data;
      });
  }
}
