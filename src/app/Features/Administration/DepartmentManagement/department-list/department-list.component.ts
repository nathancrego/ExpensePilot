import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Department } from '../model/department.model';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit, AfterViewInit {

  dptID: number | null = null;
  departments$?:Observable<Department[]>;
  constructor(private departmentService:DepartmentService, private router:Router) {}

  ngAfterViewInit(): void {
    // $('#departmentTable').DataTable({
    //   paging:true,
    //   searching:true,
    //   scrollX:true,
    // });
  }
  
  ngOnInit(): void {
    this.departments$ = this.departmentService.getAllDepartments();
  }

}
