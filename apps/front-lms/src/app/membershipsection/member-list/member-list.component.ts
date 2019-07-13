import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { Member } from '@front-lms/core-data';
import { AddMemberFormComponent } from '../add-member-form/add-member-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  searchTerm: string;
  panelOpenState = true;

  @Input() members: Member[];
  @Output() selectedMember = new EventEmitter();

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  openDialog(): void {
    const memberFormDialog = this.dialog.open(AddMemberFormComponent, {
      width: '250px'
    });

    memberFormDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goToMemberDetail(clickedMember: Member) {
    this.router.navigate(['member', clickedMember.id]);
  }
}
