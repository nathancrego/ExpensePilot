import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddExpenseCategory } from '../model/add-expensecategory.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { ExpenseCategory } from '../model/expensecategory.model';
import { EditExpenseCategory } from '../model/edit-expensecategory.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensecategoryService {

  constructor(private http:HttpClient) { }

  createExpenseCategory(addCategory: AddExpenseCategory):Observable<void>
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/ExpenseCategories`,addCategory);
  }
  getAllCategory():Observable<ExpenseCategory[]>
  {
    return this.http.get<ExpenseCategory[]>(`${environment.apiBaseUrl}/api/ExpenseCategories`);
  }
  getCategoryById(id:number):Observable<ExpenseCategory>
  {
    return this.http.get<ExpenseCategory>(`${environment.apiBaseUrl}/api/ExpenseCategories/${id}`);
  }
  updateCategory(id:number, editCategory:EditExpenseCategory):Observable<ExpenseCategory>
  {
    return this.http.put<ExpenseCategory>(`${environment.apiBaseUrl}/api/ExpenseCategories/${id}`,editCategory);
  }
  deleteCategory(id:number):Observable<ExpenseCategory>
  {
    return this.http.delete<ExpenseCategory>(`${environment.apiBaseUrl}/api/ExpenseCategories/${id}`);
  }
}
