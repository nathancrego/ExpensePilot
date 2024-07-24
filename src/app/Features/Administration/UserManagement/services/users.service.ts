import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser } from '../model/add-users.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { User } from '../model/users.model';
import { EditUser } from '../model/edit-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  createUser(addUser: AddUser):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Users`,addUser);
  }

  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/Users`);
  }

  getUserById(id: number):Observable<User>
  {
    return this.http.get<User>(`${environment.apiBaseUrl}/api/Users/${id}`)
  }

  updateUser(id: number, editUser: EditUser):Observable<User>
  {
    return this.http.put<User>(`${environment.apiBaseUrl}/api/Users/${id}`,editUser);
  }

  deleteUser(id: number):Observable<User>
  {
    return this.http.delete<User>(`${environment.apiBaseUrl}/api/Users/${id}`)
  }
  getManagers():Observable<User[]>
  {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/Users`);
  }
}
