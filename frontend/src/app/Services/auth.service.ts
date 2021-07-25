import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());

  constructor(private http:HttpClient, private Token:TokenService) { }
  authStatus = this.loggedIn.asObservable();

  changeAuthStatus(value : boolean){
    this.loggedIn.next(value);
  }

  private baseUrl = "http://localhost:8000/api";
  login(data :any)
  {
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  me(data :any)
  {
    return this.http.post(`${this.baseUrl}/me`, data)
  }

  signup(data :any)
  {
    return this.http.post(`${this.baseUrl}/signup`, data)
  }
}
