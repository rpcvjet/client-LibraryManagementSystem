import { Component, OnInit } from '@angular/core';
import { DashboardService, Circulation } from '@front-lms/core-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  circulationRecords: Circulation[];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    // this.getCirculationRecords();
  }

  getCirculationRecords() {
    this.dashboardService.loadCirculation().subscribe((data: Circulation[]) => {
      this.circulationRecords = data;
    });
  }
}
