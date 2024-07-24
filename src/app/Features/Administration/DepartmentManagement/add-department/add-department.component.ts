import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { AddDepartment } from '../model/add-department.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent implements OnDestroy {

  department: AddDepartment;
  private addDepartmentSubscription?: Subscription;

  constructor(private departmentService: DepartmentService, private router: Router) {
    this.department = {
      departmentName: '',
      lastUpdated: new Date()
    };
  }

  onFormSubmit(deptForm: NgForm): void {
    if (deptForm.valid) {
      this.addDepartmentSubscription = this.departmentService.createDepartment(this.department)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/departments');
          }
        });
    }
    else {
      Object.keys(deptForm.controls).forEach(field => {
        const control = deptForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/departments');
  }

  ngOnDestroy(): void {
    this.addDepartmentSubscription?.unsubscribe();
  }
}
