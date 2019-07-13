import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BooksRouter } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@front-lms/material/src';
import { BookListSearchComponent } from './book-list-search/book-list-search.component';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
@NgModule({
  declarations: [BooksComponent, BookListSearchComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRouter,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class BooksModule {}
