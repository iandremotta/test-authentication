import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient, private Token:TokenService) { }
  private baseUrl = "http://localhost:8000/api/update";

  password(data :any)
  {
    return this.http.post(`${this.baseUrl}/password`, data)
  }
}
