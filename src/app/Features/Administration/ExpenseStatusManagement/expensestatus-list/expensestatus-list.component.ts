import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseStatus } from '../model/expensestatus.model';
import { ExpensestatusService } from '../services/expensestatus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expensestatus-list',
  templateUrl: './expensestatus-list.component.html',
  styleUrl: './expensestatus-list.component.css'
})
export class ExpensestatusListComponent implements OnInit{

  statusID:number | null = null;
  statuses$?:Observable<ExpenseStatus[]>;
  constructor(private expensestatusService:ExpensestatusService, private router:Router){}

  ngOnInit(): void {
    this.statuses$ = this.expensestatusService.getAllStatus();
  }

}
