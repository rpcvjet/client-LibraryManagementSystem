import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from '@front-lms/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from '@front-lms/components/field.interface';
import { Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { MatSnackBar, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Employee, EmployeeService } from '@front-lms/core-data';
import { DataSource } from '@angular/cdk/table';
import { EmployeeCardComponent } from './employee-card/employee-card.component';



@Component({
  selector: 'app-employee-section',
  templateUrl: './employee-section.component.html',
  styleUrls: ['./employee-section.component.css']
})
export class EmployeeSectionComponent implements OnInit {
  empNumber;
  employee: Employee[];
  displayedColumns = ['name', 'email', 'location', 'employeeid', 'edit', 'delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  @ViewChild (MatSort) sort: MatSort;

  constructor(private snackBar: MatSnackBar, private employeeService: EmployeeService, public dialog: MatDialog) { }


  ngOnInit() {
    this.getAllEmployees();
  }

  onEditClicked(row) {
    console.log('update this row', row);
  }

  onDeleteClicked(employee) {
    this.employeeService.deleteEmployee(employee)
    .subscribe( res => this.getAllEmployees());
  }
  getAllEmployees() {
    this.employeeService.getAll().subscribe( employees => {
      console.log(employees);
      // this.employee = employees;
      // this.employeeService.employeeData = employees;
      this.dataSource = new MatTableDataSource(employees);
      this.dataSource.sort = this.sort;

    });
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(EmployeeCardComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
