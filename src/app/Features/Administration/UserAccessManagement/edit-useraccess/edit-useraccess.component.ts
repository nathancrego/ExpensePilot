import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserAccess } from '../model/useraccess.model';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../UserManagement/model/users.model';
import { Roles } from '../../UserRoleManagement/model/roles.model';
import { UseraccessService } from '../services/useraccess.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from '../../UserRoleManagement/services/roles.service';
import { UsersService } from '../../UserManagement/services/users.service';
import { EditUserAccess } from '../model/edit-useraccess.model';
import { NgForm } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-edit-useraccess',
  templateUrl: './edit-useraccess.component.html',
  styleUrl: './edit-useraccess.component.css'
})
export class EditUseraccessComponent implements OnInit, OnDestroy {

  userAccessID: number | null = null;
  useraccess?: UserAccess;

  logons$?: Observable<User[]>;
  roles$?: Observable<Roles[]>;
  selectedUserId?: number | null = null;
  selectedUserRoleId?: number | null = null;

  paramSubscription?: Subscription;
  routeSubscription?: Subscription;
  updateUserAccessSubscription?: Subscription;
  deleteUserAccessSubscription?: Subscription;

  constructor(private useraccessService: UseraccessService,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RolesService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    //Subscription to map the id and also convert id to string and then back to number
    this.routeSubscription = this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        const idParam = params.get('id');
        this.userAccessID = idParam !== null ? Number(idParam) : null;

        //Fetch acccess from API
        if (this.userAccessID !== null) {
          this.useraccessService.getUserAccessById(this.userAccessID)
            .subscribe({
              next: (response) => {
                this.useraccess = response;
                this.selectedUserId = response.userID || null;
                this.selectedUserRoleId = response.userRoleID || null;
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

    this.logons$ = this.userService.getAllUsers();
    this.roles$ = this.roleService.getAllRoles();

  }

  onFormSubmit(edituseraccessForm: NgForm): void {
    if (edituseraccessForm.valid) {
      //Convert Model to request object
      if (this.useraccess && this.userAccessID) {
        var editUserAccess: EditUserAccess = {
          userID: this.selectedUserId,
          userRoleID: this.selectedUserRoleId,
          logon: this.useraccess?.logon,
          role: this.useraccess?.role,
          lastUpdated: new Date()
        };
        this.updateUserAccessSubscription = this.useraccessService.updateUserAccess(this.userAccessID, editUserAccess)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/admin/useraccess')
            }
          });
      }
    }
    else {
      Object.keys(edituseraccessForm.controls).forEach(field => {
        const control = edituseraccessForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  onDelete(): void {
    if (this.userAccessID) {
      //Call service to delete department
      this.deleteUserAccessSubscription = this.useraccessService.deleteUserAccess(this.userAccessID)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/useraccess')
          }
        })
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/useraccess');
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateUserAccessSubscription?.unsubscribe();
    this.deleteUserAccessSubscription?.unsubscribe();
  }

}
