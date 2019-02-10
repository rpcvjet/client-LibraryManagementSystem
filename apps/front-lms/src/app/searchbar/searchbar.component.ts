import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Member, MemberSectionService } from '@front-lms/core-data';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { AddMemberFormComponent } from '../membershipsection/add-member-form/add-member-form.component';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchInput = new FormControl();
  filteredOptions: Observable<string[]>;
  allMembers: Member[];
  autoCompleteList: any[];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelectedOption = new EventEmitter();
  @Output() selected = new EventEmitter();
  @ViewChild('autocompleteInput') autocompleteInput: ElementRef;

  constructor(private memberserive: MemberSectionService, public dialog: MatDialog) { }

  ngOnInit() {
    this.memberserive.getAll().subscribe(members => {
      this.allMembers = members;
    });

    this.searchInput.valueChanges.subscribe(userInput => {

      this.autoCompleteExpenseList(userInput);

    });


  }



  private autoCompleteExpenseList(input) {
    const categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    let categoryList = [];
    if (typeof val !== 'string') {
        return [];
    }
    if (val === '' || val === null) {
        return [];
    }
    return val ? this.allMembers.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) !== -1)
        : this.allMembers;
  }

  displayFn(member: Member) {
    let k = member ? member.name : member;
    return k;
}

filterMemberList(event) {
    const members = event.source.value;
    if (!members) {
        this.memberserive.searchOption = [];
    } else {
        this.memberserive.searchOption.push(members);
        this.onSelectedOption.emit(this.memberserive.searchOption);
    }
    this.focusOnPlaceInput();
}

removeOption(option) {

    const index = this.memberserive.searchOption.indexOf(option);
    if (index >= 0) {
      this.memberserive.searchOption.splice(index, 1);
    }
    this.focusOnPlaceInput();

    this.onSelectedOption.emit(this.memberserive.searchOption);
}

// focus the input field and remove any unwanted text.
focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
}
openDialog(): void {

  const dialogRef = this.dialog.open(AddMemberFormComponent, {
    width: '250px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

close() {

}


}
