import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password:null
  };

  public error = null;

  constructor(private Auth:AuthService,
     private Token : TokenService,
     private router:Router
      ) { }



  onSubmit(){
   this.Auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error:any){
    this.error = error.error.error;
  }

  handleResponse(data:any){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
    this.Auth.changeAuthStatus(true);
  }
  
  ngOnInit(): void {}

}
