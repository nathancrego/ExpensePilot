import { Component, OnDestroy } from '@angular/core';
import { AddUserAccess } from '../model/add-useraccess.model';
import { Roles } from '../../UserRoleManagement/model/roles.model';
import { catchError, Observable, Subscription } from 'rxjs';
import { User } from '../../UserManagement/model/users.model';
import { UseraccessService } from '../services/useraccess.service';
import { Router } from '@angular/router';
import { UsersService } from '../../UserManagement/services/users.service';
import { RolesService } from '../../UserRoleManagement/services/roles.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-useraccess',
  templateUrl: './add-useraccess.component.html',
  styleUrl: './add-useraccess.component.css'
})
export class AddUseraccessComponent implements OnDestroy {

  useraccesses: AddUserAccess;
  logons$?: Observable<User[]> | undefined;
  roles$?: Observable<Roles[]> | undefined;
  private addUserAccessSubscription?: Subscription;

  constructor(private useraccessService: UseraccessService, private router: Router, private userService: UsersService, private roleService: RolesService) {
    this.useraccesses = {
      userID: null,
      userRoleID: null,
      logon: '',
      role: '',
      lastUpdated: new Date()
    };

    //Initialize observables
    this.logons$ = this.userService.getAllUsers().pipe(
      catchError(error => {
        console.error('Error loading Users & Logons:', error);
        return ([]);
      })
    );

    this.roles$ = this.roleService.getAllRoles().pipe(
      catchError(error => {
        console.error('Error loading Roles:', error);
        return ([]); // or handle error as needed
      })
    );
  }

  onFormSubmit(useraccessForm: NgForm): void {
    if (useraccessForm.valid) {
      if (this.useraccesses) {
        this.addUserAccessSubscription = this.useraccessService.createUserAccess(this.useraccesses)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/admin/useraccess');
            },
            error: (error) => {
              console.error('Error creating user:', error);
            }
          });
      }
    }
    //highlight invalid fields
    else {
      Object.keys(useraccessForm.controls).forEach(field => {
        const control = useraccessForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/useraccess');
  }

  ngOnDestroy(): void {
    this.addUserAccessSubscription?.unsubscribe();
  }
}
