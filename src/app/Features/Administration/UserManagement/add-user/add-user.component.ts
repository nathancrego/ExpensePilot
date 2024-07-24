import { Component, OnDestroy } from '@angular/core';
import { AddUser } from '../model/add-users.model';
import { Observable, Subscription, catchError } from 'rxjs';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { User } from '../model/users.model';
import { Department } from '../../DepartmentManagement/model/department.model';
import { DepartmentService } from '../../DepartmentManagement/services/department.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnDestroy {

  users: AddUser;
  managers$?: Observable<User[]> | undefined;
  departments$?: Observable<Department[]> | undefined;
  selectedManagerId?: number | null = null;
  selectedDepartmentId?: number | null = null;
  private addUserSubscription?: Subscription;

  constructor(private userService: UsersService, private router: Router, private departmentService: DepartmentService) {
    this.users = {
      logon: '',
      fName: '',
      lName: '',
      email: '',
      managerID: null,
      managerName: '',
      departmentID: null,
      departmentName: '',
      lastUpdated: new Date()

    };

    // Initialize observables in constructor
    this.managers$ = this.userService.getManagers().pipe(
      catchError(error => {
        console.error('Error loading managers:', error);
        return ([]);
      })
    );

    this.departments$ = this.departmentService.getAllDepartments().pipe(
      catchError(error => {
        console.error('Error loading departments:', error);
        return ([]); // or handle error as needed
      })
    );
  }

  onFormSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      if (this.users) {
        this.addUserSubscription = this.userService.createUser(this.users)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/admin/users');
            },
            error: (error) => {
              console.error('Error creating user:', error);
            }
          });
      }
    }
    //highlight invalid fields
    else
    {
      Object.keys(userForm.controls).forEach(field => {
        const control = userForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/users');
  }

  ngOnDestroy(): void {
    this.addUserSubscription?.unsubscribe();
  }


}
