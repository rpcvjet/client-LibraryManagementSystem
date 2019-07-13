import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '@front-lms/core-data/src';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  displayedBook: Book;
  displayedImage;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadBookData();
  }

  loadBookData() {
    const Bookid = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(Bookid).subscribe((data: Book) => {
      this.displayedBook = data[0];
      this.displayedImage = data[0].image;
      let response = data[0].available;
      if (response == 1) {
        this.displayedBook.available = 'Yes';
      } else {
        this.displayedBook.available = 'No';
      }
    });
  }
}
