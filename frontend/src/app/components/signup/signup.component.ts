import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private Auth:AuthService,
    private Token:TokenService,
    private router:Router)
    { }

  public form = {
    name:null,
    email: null,
    password:null,
    password_confirmation:null
  }

  public error:any= [];

  ngOnInit(): void {}

    onSubmit(){
    this.Auth.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error:any){
    this.error = error.error.errors;
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
}
