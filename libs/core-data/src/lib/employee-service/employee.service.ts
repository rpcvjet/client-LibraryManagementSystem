import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee} from './employee';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/api';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employees: Employee[];
  model = 'employees';


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(BASE_URL);
  }

  createEmployee(employee) {
    return this.httpClient.post(`BASE_URL/${employees}`, employee);
  }
}
