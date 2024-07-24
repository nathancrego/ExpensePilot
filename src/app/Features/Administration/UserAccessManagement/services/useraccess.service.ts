import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUserAccess } from '../model/add-useraccess.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { UserAccess } from '../model/useraccess.model';
import { User } from '../../UserManagement/model/users.model';
import { EditUserAccess } from '../model/edit-useraccess.model';

@Injectable({
  providedIn: 'root'
})
export class UseraccessService {

  constructor(private http: HttpClient) { }

  createUserAccess(addUserAccess: AddUserAccess):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/UserAccess`,addUserAccess);
  }

  getAllUserAccess():Observable<UserAccess[]>
  {
    return this.http.get<UserAccess[]>(`${environment.apiBaseUrl}/api/UserAccess`);
  }
  getUserAccessById(id:number):Observable<UserAccess>
  {
    return this.http.get<UserAccess>(`${environment.apiBaseUrl}/api/UserAccess/${id}`);
  }
  updateUserAccess(id:number, editUserAccess:EditUserAccess):Observable<UserAccess>
  {
    return this.http.put<UserAccess>(`${environment.apiBaseUrl}/api/UserAccess/${id}`,editUserAccess);
  }
  deleteUserAccess(id:number):Observable<UserAccess>
  {
    return this.http.delete<UserAccess>(`${environment.apiBaseUrl}/api/UserAccess/${id}`)
  }
}
