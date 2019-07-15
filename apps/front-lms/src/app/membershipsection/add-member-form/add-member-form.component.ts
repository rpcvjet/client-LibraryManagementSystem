import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { MemberSectionService, Member } from '@front-lms/core-data/src';
import { UploadService } from '@front-lms/core-data/src/lib/upload-service/upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent implements OnInit {
  dateToday;
  memberNumber;
  newMemberForm: any;
  selectedFile = null;

  constructor(
    public dialogRef: MatDialogRef<AddMemberFormComponent>,
    private snackBar: MatSnackBar,
    private memberService: MemberSectionService,
    private uploadService: UploadService,
    private fb: FormBuilder
  ) {
    this.memberService = memberService;
    this.newMemberForm = this.fb.group({
      member_name: [''],
      email: [''],
      phone: [''],
      image: ['']
    });
  }

  ngOnInit() {
    this.dateToday = new Date();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  sendMember(member) {
    this.memberService.createMember(member).subscribe(res => {
      this.snackBar.open('Member Added', 'Dismiss', {
        duration: 4000
      });
    });
    this.onNoClick();
    //reload
  }

  onSubmit = event => {
    let newMember = {
      member_name: this.newMemberForm.value.member_name,
      email: this.newMemberForm.value.email,
      phone: this.newMemberForm.value.phone,
      memberNumber: this.memberNumber = uuid(),
      dateadded: this.dateToday,
      image: this.selectedFile
    };
    this.sendMember(newMember);
  };
}
