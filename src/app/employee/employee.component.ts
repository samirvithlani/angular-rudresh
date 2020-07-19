import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  employee: Array<any> = [];

  tempemployee: Array<any> = [];
  btntxt = "asc";
  sort: boolean = false;

  filterData(value) {

    console.log("value -->", value)
    this.employee = this.tempemployee.filter(i => i.eName.toLowerCase().indexOf(value.toLowerCase())  !== -1)

    console.log(this.tempemployee.filter(i => i.eName.toLowerCase().indexOf(value.toLowerCase())  !== -1))
  }
  sortData() {

  this.employee = this.tempemployee.sort((i, j) => (i.eName > j.eName) ? 1 : -1)
  }
  ngOnInit(): void {

    this.employee = [{ eName: 'samir', eEmail: 'samir@gmail.com', eAge: 22 },
    { eName: 'raj', eEmail: 'raj@gmail.com', eAge: 24 },
    { eName: 'parth', eEmail: 'parth@gmail.com', eAge: 20 }
    ];

    this.tempemployee = this.employee;

  }

}
