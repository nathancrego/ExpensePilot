import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPolicy } from '../model/add-policy.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Policy } from '../model/policy.model';
import { EditPolicy } from '../model/edit-policy.model';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private http:HttpClient) { }
  createPolicy(addPolicy: AddPolicy):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Policies`,addPolicy);
  }
  getAllPolicies():Observable<Policy[]>
  {
    return this.http.get<Policy[]>(`${environment.apiBaseUrl}/api/Policies`);
  }
  getPolicyById(id:number):Observable<Policy>
  {
    return this.http.get<Policy>(`${environment.apiBaseUrl}/api/Policies/${id}`);
  }
  updatePolicy(id:number, editPolicy:EditPolicy):Observable<Policy>
  {
    return this.http.put<Policy>(`${environment.apiBaseUrl}/api/Policies/${id}`,editPolicy);
  }
  deletePolicy(id:number):Observable<Policy>
  {
    return this.http.delete<Policy>(`${environment.apiBaseUrl}/api/Policies/${id}`);
  }
}
