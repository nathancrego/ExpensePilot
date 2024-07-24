import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseCategory } from '../model/expensecategory.model';
import { ExpensecategoryService } from '../services/expensecategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expensecategory-list',
  templateUrl: './expensecategory-list.component.html',
  styleUrl: './expensecategory-list.component.css'
})
export class ExpensecategoryListComponent implements OnInit{

  categoryID:number | null = null;
  categories$?:Observable<ExpenseCategory[]>;
  constructor(private expensecategoryService:ExpensecategoryService, private router:Router){}

  ngOnInit(): void {
    this.categories$ = this.expensecategoryService.getAllCategory();
  }

}
