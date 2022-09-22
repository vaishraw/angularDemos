import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { EmpData } from './empdata.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  fetchedEmp: EmpData[] =[];
  backendurl = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEmp();
  }

 

  onCreateEmp(empData: { firstname: string; lastname: string;email: string; }, form: NgForm) {
    this.http.post(this.backendurl, empData).subscribe((responseData) => {
      console.log(responseData);
      this.fetchEmp();
      form.reset();
    });
  }
  onFetchEmps() {
    this.fetchEmp();
  }

  onDeletePost(id: number) {
    this.http.delete(this.backendurl + '/' + id).subscribe((response) => {
      console.log('Employee deleted: ' + response);
      this.fetchEmp();
    });
  }

  updateEmployee(id:number,empData: { firstname: string; lastname: string;email: string;}, form: NgForm ) {
    this.http.put(this.backendurl + '/' + id,empData).subscribe((responseData) => {
      console.log(responseData);
      this.fetchEmp();
      form.reset();
    });
  }
  
  fetchEmp() {
    this.http
      .get(this.backendurl)
      .pipe(
        map((responseData) => {
          const empsArray: EmpData[] = [];
          for (const key in responseData) {
            var x = { ...responseData[key] };
            empsArray.push(x);
          }
          return empsArray;
        })
      )
      .subscribe((employee) => {
        this.fetchedEmp = employee;
      });
  }
}

