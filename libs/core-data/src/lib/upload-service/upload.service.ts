import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private httpClient: HttpClient) {}

  UploadFile(file) {
    console.log('file', file);
    return this.httpClient.post(
      `https://librarystorage-2211a.firebaseio.com/${file.name}`,
      file
    );
  }
}
