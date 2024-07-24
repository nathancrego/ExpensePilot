import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../model/login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  $user = new BehaviorSubject<Login|undefined>(undefined);

  constructor(private http:HttpClient) { }
}
