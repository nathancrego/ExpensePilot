import { Component, OnDestroy, OnInit } from '@angular/core';
import { Roles } from '../model/roles.model';
import { Subscription } from 'rxjs';
import { RolesService } from '../services/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditRoles } from '../model/edit-roles.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrl: './edit-roles.component.css'
})
export class EditRolesComponent implements OnInit, OnDestroy {

  id: number | null = null;
  role?: Roles;

  paramSubscription?: Subscription;
  routeSubscription?: Subscription;
  updateRolesSubscription?: Subscription;
  deleteRolesSubscription?: Subscription;

  constructor(private rolesService: RolesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Subscription to map the id and also convert id to string and then back to number
    this.routeSubscription = this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        const idParam = params.get('id');
        this.id = idParam !== null ? Number(idParam) : null;

        //Fetch role from API
        if (this.id !== null) {
          this.rolesService.getRoleById(this.id)
            .subscribe({
              next: (response) => {
                this.role = response;
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
  }

  onFormSubmit(editroleForm: NgForm): void {
    if (editroleForm.valid) {
      //Convert Model to request object
      if (this.role && this.id) {
        var editRole: EditRoles = {
          role: this.role?.role,
          lastUpdated: new Date()
        };
        this.updateRolesSubscription = this.rolesService.updateRole(this.id, editRole)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/admin/roles')
            }
          });
      }
    }
    else {
      Object.keys(editroleForm.controls).forEach(field => {
        const control = editroleForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
  onDelete(): void {
    if (this.id) {
      //Call service to delete department
      this.deleteRolesSubscription = this.rolesService.deleteRole(this.id)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/roles')
          }
        })
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/roles');
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateRolesSubscription?.unsubscribe();
    this.deleteRolesSubscription?.unsubscribe();
  }

}
