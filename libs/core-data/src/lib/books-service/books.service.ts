import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:8000/api/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getBooksBySearchTerm(text) {
    return this.httpClient.get(`${BASE_URL}/${text}`);
  }

  getBookById(id): Observable<any> {
    return this.httpClient.get(`${BASE_URL}/BookId/${id}`);
  }

  getBookByISBN(isbn) {
    return this.httpClient.get(`${BASE_URL}/isbn/${isbn}`);
  }
}
