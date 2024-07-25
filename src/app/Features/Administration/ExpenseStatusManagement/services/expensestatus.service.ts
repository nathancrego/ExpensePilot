import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddExpenseStatus } from '../model/add-expensestatus.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { ExpenseStatus } from '../model/expensestatus.model';
import { EditExpenseStatus } from '../model/edit-expensestatus.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensestatusService {

  constructor(private http:HttpClient) { }
  createExpenseStatus(addStatus: AddExpenseStatus):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/ExpenseStatuses`,addStatus);
  }
  getAllStatus():Observable<ExpenseStatus[]>
  {
    return this.http.get<ExpenseStatus[]>(`${environment.apiBaseUrl}/api/ExpenseStatuses`);
  }
  getStatusById(id:number):Observable<ExpenseStatus>
  {
    return this.http.get<ExpenseStatus>(`${environment.apiBaseUrl}/api/ExpenseStatuses/${id}`);
  }
  updateStatus(id:number, editStatus:EditExpenseStatus):Observable<ExpenseStatus>
  {
    return this.http.put<ExpenseStatus>(`${environment.apiBaseUrl}/api/ExpenseStatuses/${id}`,editStatus);
  }
  deleteStatus(id:number):Observable<ExpenseStatus>
  {
    return this.http.delete<ExpenseStatus>(`${environment.apiBaseUrl}/api/ExpenseStatuses/${id}`);
  }
}
