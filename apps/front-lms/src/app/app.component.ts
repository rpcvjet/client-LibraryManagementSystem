import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/member', icon: 'face', title: 'Membership' },
    { path: '/employees', icon: 'assignment_ind', title: 'Employee Section' },
    { path: '/books', icon: 'library_books', title: 'Books' }
  ];

  ngOnInit() {}
}
