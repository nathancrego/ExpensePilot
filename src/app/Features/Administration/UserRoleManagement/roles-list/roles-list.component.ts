import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';
import { Observable } from 'rxjs';
import { Roles } from '../model/roles.model';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export class RolesListComponent implements OnInit {

  id: number | null = null;
  roles$?: Observable<Roles[]>;
  constructor(private rolesService: RolesService) { }


  ngOnInit(): void {
    this.roles$ = this.rolesService.getAllRoles();
  }
}
