import { Component, OnDestroy } from '@angular/core';
import { AddRoles } from '../model/add-roles.model';
import { Subscription } from 'rxjs';
import { RolesService } from '../services/roles.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrl: './add-roles.component.css'
})
export class AddRolesComponent implements OnDestroy {

  roles: AddRoles;
  private addRoleSubscription?: Subscription;

  constructor(private rolesService: RolesService, private router: Router) {
    this.roles = {
      role: '',
      lastUpdated: new Date()
    };
  }

  onFormSubmit(roleForm: NgForm): void {
    if (roleForm.valid) {
      if (this.roles) {
        this.addRoleSubscription = this.rolesService.createRole(this.roles)
          .subscribe({
            next: (response) => {
              this.router.navigateByUrl('/admin/roles');
            }
          });
      }
    }
    else {
      Object.keys(roleForm.controls).forEach(field => {
        const control = roleForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/roles');
  }

  ngOnDestroy(): void {
    this.addRoleSubscription?.unsubscribe();
  }

}
