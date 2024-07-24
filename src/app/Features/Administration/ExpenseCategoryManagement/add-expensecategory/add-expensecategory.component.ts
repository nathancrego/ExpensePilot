import { Component, OnDestroy } from '@angular/core';
import { AddExpenseCategory } from '../model/add-expensecategory.model';
import { Subscription } from 'rxjs';
import { ExpensecategoryService } from '../services/expensecategory.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-expensecategory',
  templateUrl: './add-expensecategory.component.html',
  styleUrl: './add-expensecategory.component.css'
})
export class AddExpensecategoryComponent implements OnDestroy {

  category: AddExpenseCategory;
  private addExpenseCategorySubscription?: Subscription;

  constructor(private expensecategoryService: ExpensecategoryService, private router: Router) {
    this.category = {
      categoryName: '',
      lastUpdated: new Date()
    };
  }

  onFormSubmit(categoryForm: NgForm): void {
    if (categoryForm.valid) {
      this.addExpenseCategorySubscription = this.expensecategoryService.createExpenseCategory(this.category)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/expensecategory')
          }
        });
    }
    else {
      Object.keys(categoryForm.controls).forEach(field => {
        const control = categoryForm.control.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }

  onBack(): void {
    this.router.navigateByUrl('/admin/expensecategory');
  }

  ngOnDestroy(): void {
    this.addExpenseCategorySubscription?.unsubscribe();
  }



}
