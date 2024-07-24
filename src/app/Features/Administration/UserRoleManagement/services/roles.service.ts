import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddRoles } from '../model/add-roles.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Roles } from '../model/roles.model';
import { EditRoles } from '../model/edit-roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  createRole(addRole: AddRoles): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/UserRoles`, addRole);
  }

  getAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${environment.apiBaseUrl}/api/UserRoles`);
  }

  getRoleById(id: number): Observable<Roles> {
    return this.http.get<Roles>(`${environment.apiBaseUrl}/api/UserRoles/${id}`)
  }

  updateRole(id: number, editRole: EditRoles): Observable<Roles> {
    return this.http.put<Roles>(`${environment.apiBaseUrl}/api/UserRoles/${id}`, editRole);
  }

  deleteRole(id: number): Observable<Roles> {
    return this.http.delete<Roles>(`${environment.apiBaseUrl}/api/UserRoles/${id}`)
  }
}
