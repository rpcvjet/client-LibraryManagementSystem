import { Component, OnInit, Input,  } from '@angular/core';
import { Circulation} from '@front-lms/core-data';


@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @Input() records: Circulation[]
  constructor() {


  }

  ngOnInit() {
  }

}
