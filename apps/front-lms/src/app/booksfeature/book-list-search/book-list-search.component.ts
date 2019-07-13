import { Component, OnInit } from '@angular/core';
import { BooksService, Book } from '@front-lms/core-data/src';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list-search',
  templateUrl: './book-list-search.component.html',
  styleUrls: ['./book-list-search.component.css']
})
export class BookListSearchComponent implements OnInit {
  bookSearch: string;
  books: Book[];

  constructor(private bookService: BooksService, private router: Router) {}

  ngOnInit() {}

  searchForBook(text) {
    this.bookService.getBooksBySearchTerm(text).subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  goToBookDetail(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  }
}
