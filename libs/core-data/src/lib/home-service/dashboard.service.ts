import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Circulation} from './circulation-record';
const BASE_URL = 'http://localhost:8000/api/circulation/';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  public circulationData: Circulation[];

  constructor(private httpClient: HttpClient) { }

  loadCirculation() {
    return this.httpClient.get(BASE_URL);
  }
}
