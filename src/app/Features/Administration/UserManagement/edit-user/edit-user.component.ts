import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model/users.model';
import { Observable, Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditUser } from '../model/edit-user.model';
import { Department } from '../../DepartmentManagement/model/department.model';
import { DepartmentService } from '../../DepartmentManagement/services/department.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit, OnDestroy {

  id: number | null = null;
  user?: User;

  managers$?: Observable<User[]>
  departments$?: Observable<Department[]>
  selectedManagerId?: number | null = null;
  selectedDepartmentId?: number | null = null;

  paramSubscription?: Subscription;
  routeSubscription?: Subscription;
  updateUserSubscription?: Subscription;
  deleteUserSubscription?: Subscription;

  constructor(private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit(): void {
    //Subscription to map the id and also convert id to string and then back to number
    this.routeSubscription = this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        const idParam = params.get('id');
        this.id = idParam !== null ? Number(idParam) : null;

        //Fetch user from API
        if (this.id !== null) {
          this.userService.getUserById(this.id)
            .subscribe({
              next: (response) => {
                this.user = response;
                this.selectedManagerId = response.managerID || null;
                this.selectedDepartmentId = response.departmentID || null;

              },
              error: (err) => {
                console.error('Error fetching role:', err);
              }
            });
        } else {
          console.warn('No valid role ID found in route parameters.');
        }
      },
      error: (err) => {
        console.error('Error retrieving route parameters:', err);
      }
    });

    this.managers$ = this.userService.getManagers();
    this.departments$ = this.departmentService.getAllDepartments();

  }

  onFormSubmit(edituserForm:NgForm): void {
    if (edituserForm.valid) {
    //Convert Model to request object
    if (this.user && this.id) {
      var editUser: EditUser = {
        logon: this.user?.logon,
        fName: this.user?.fName,
        lName: this.user?.lName,
        email: this.user?.email,
        managerID: this.selectedManagerId,
        managerName: this.user?.managerName,
        departmentID:this.selectedDepartmentId,
        departmentName: this.user?.departmentName,
        lastUpdated: new Date()
      };
      this.updateUserSubscription = this.userService.updateUser(this.id, editUser)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/users')
          }
        });
    }
  }
  else
  {
    Object.keys(edituserForm.controls).forEach(field => {
      const control = edituserForm.control.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
  }
  onDelete(): void {
    if (this.id) {
      //Call service to delete department
      this.deleteUserSubscription = this.userService.deleteUser(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/users')
          }
        })
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/users');
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateUserSubscription?.unsubscribe();
    this.deleteUserSubscription?.unsubscribe();
  }

}
