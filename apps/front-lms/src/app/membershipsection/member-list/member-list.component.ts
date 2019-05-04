import { Component, OnInit, Input } from '@angular/core';
import { Member } from '@front-lms/core-data';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  searchTerm: string;
  panelOpenState = false;

  @Input() members: Member[];
  constructor() {}

  ngOnInit() {}
}
