import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Employee} from './employee';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/api/employees/';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeData: Employee[];
  model = 'employees';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(BASE_URL);
  }

  deleteEmployee(employee: Employee) {
    return this.httpClient.delete(BASE_URL + `${employee.id}`);
  }

  createEmployee(employee) {
    return this.httpClient.post(BASE_URL, employee);
  }
}
