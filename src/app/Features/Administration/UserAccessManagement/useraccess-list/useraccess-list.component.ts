import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAccess } from '../model/useraccess.model';
import { UseraccessService } from '../services/useraccess.service';

@Component({
  selector: 'app-useraccess-list',
  templateUrl: './useraccess-list.component.html',
  styleUrl: './useraccess-list.component.css'
})
export class UseraccessListComponent implements OnInit{

  id:number | null = null;
  userAccesses$?:Observable<UserAccess[]>
  constructor(private useracessService:UseraccessService){}

  ngOnInit(): void {
    this.userAccesses$ = this.useracessService.getAllUserAccess();
  }

}
