import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department.model';
import { environment } from '../../../../../environments/environment.development';
import { AddDepartment } from '../model/add-department.model';
import { EditDepartment } from '../model/edit-department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //Injects and initializes the HttpClient
  constructor(private http:HttpClient) { }

  getAllDepartments():Observable<Department[]>
  {
    return this.http.get<Department[]>(`${environment.apiBaseUrl}/api/departments`)
  }

  getDepartmentById(id: number): Observable<Department>
  {
    return this.http.get<Department>(`${environment.apiBaseUrl}/api/departments/${id}`);
  }

  createDepartment(model: AddDepartment):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/departments`,model)
  }

  updateDepartment(id: number, editDepartment: EditDepartment):Observable<Department>
  {
    return this.http.put<Department>(`${environment.apiBaseUrl}/api/departments/${id}`,editDepartment);
  }

  deleteDepartment(id: number):Observable<Department>
  {
    return this.http.delete<Department>(`${environment.apiBaseUrl}/api/departments/${id}`);
  }
}
