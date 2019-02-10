import { Injectable } from '@angular/core';
import { Employee } from '../employee-service/employee';
import { AuthData } from './authModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private employee: Employee;

  constructor(private httpClient: HttpClient) { }

  login() {

  }

  logout() {

  }
}
