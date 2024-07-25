import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../model/login.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginRequest } from '../model/login-request.model';
import { LoginResponse } from '../model/login-response.model';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  $user = new BehaviorSubject<Login|undefined>(undefined);

  constructor(private http:HttpClient, private cookieService: CookieService) { }

  login(request: LoginRequest):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(`${environment.apiBaseUrl}/api/AuthLogin/login`,{logon:request.logon, password:request.password});
  }
}
