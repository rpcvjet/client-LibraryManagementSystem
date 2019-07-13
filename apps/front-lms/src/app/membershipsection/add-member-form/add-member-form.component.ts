import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { MemberSectionService, Member } from '@front-lms/core-data/src';
import { UploadService } from '@front-lms/core-data/src/lib/upload-service/upload.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
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

  // Progress monitoring
  uploadPercent: Observable<number>;
  snapshot: Observable<any>;
  // Download URL
  downloadURL: Observable<string>;

  constructor(
    public dialogRef: MatDialogRef<AddMemberFormComponent>,
    private snackBar: MatSnackBar,
    private memberService: MemberSectionService,
    private uploadService: UploadService,
    private fb: FormBuilder,
    private storage: AngularFireStorage
  ) {
    this.memberService = memberService;
    this.newMemberForm = this.fb.group({
      member_name: [''],
      email: [''],
      phone: [''],
      image: ['']
    });
  }

  // regConfig: FieldConfig[] = [
  //   {
  //     type: 'input',
  //     label: 'Name',
  //     inputType: 'text',
  //     name: 'member_name',
  //     value: ''
  //     validations: [
  //       {
  //         name: 'required',
  //         validator: Validators.required,
  //         message: 'Name Required'
  //       },
  //       {
  //         name: 'pattern',
  //         validator: Validators.pattern('^[a-zA-Z" "]+$'),
  //         message: 'Accept only text'
  //       }
  //     ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'Email',
  //     inputType: 'email',
  //     name: 'email',
  //     value: ''
  //     // validations: [
  //     //   {
  //     //     name: 'required',
  //     //     validator: Validators.required,
  //     //     message: 'Email Required'
  //     //   },
  //     //   {
  //     //     name: 'pattern',
  //     //     validator: Validators.pattern(
  //     //       '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
  //     //     ),
  //     //     message: 'Invalid Email'
  //     //   }
  //     // ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'password',
  //     inputType: 'password',
  //     name: 'password',
  //     value: ''
  //     // validations: [
  //     //   {
  //     //     name: 'required',
  //     //     validator: Validators.required,
  //     //     message: 'Password Required'
  //     //   }
  //     // ]
  //   },
  //   {
  //     type: 'input',
  //     label: 'Phone Number',
  //     inputType: 'phone',
  //     name: 'phone',
  //     value: ''
  //     // validations: [
  //     //   {
  //     //     name: 'required',
  //     //     validator: Validators.required,
  //     //     message: 'Phone Number Required'
  //     //   }
  //     // ]
  //   },
  //   {
  //     type: 'matchip',
  //     label: 'Image Upload',
  //     name: 'image',
  //   },
  //   {
  //     type: 'button',
  //     label: 'Save'
  //   }
  // ];

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
    console.log('in send member now', member);
    this.memberService.createMember(member).subscribe(res => {
      console.log('res', res);

      this.snackBar.open('Member Added', 'Dismiss', {
        duration: 4000
      });
    });
    this.onNoClick();
    //reload
  }

  onSubmit = event => {
    const storageRef = firebase.storage().ref();
    let newMember = {
      member_name: this.newMemberForm.value.member_name,
      email: this.newMemberForm.value.email,
      phone: this.newMemberForm.value.phone,
      memberNumber: this.memberNumber = uuid(),
      dateadded: this.dateToday
    };
    if (this.selectedFile === null) {
      this.memberService.createMember(newMember).subscribe(res => {
        console.log('res with no file', res);
        this.snackBar.open('Member Added', 'Dismiss', {
          duration: 4000
        });
      });
    } else {
      // File or Blob named mountains.jpg
      const uploadTask = storageRef
        .child(this.selectedFile.name)
        .put(this.selectedFile);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
        error => {
          // Handle unsuccessful uploads
          switch (error.name) {
            case 'storage/unauthorized':
              console.log("User doesn't have permission to access the object");
              break;

            case 'storage/unknown':
              console.log(
                'Unknown error occurred, inspect error.serverResponse'
              );
              break;
          }
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            // this.downloadURL = downloadURL; <- not going to work
            Object.assign(newMember, { image: downloadURL });
            this.sendMember(newMember);
            // this.memberService.createMember(newMember).subscribe(res => {
            //   console.log('res', res);

            //   this.snackBar.open('Member Added', 'Dismiss', {
            //     duration: 4000
            //   });
            // });
            // this.onNoClick();
            // window.location.reload();
          });
        }
      );
    }
  };
}
