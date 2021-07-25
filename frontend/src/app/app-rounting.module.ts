import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

const appRoutes:Routes = [
  {
    path:'login',
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup',
    component:SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate : [AfterLoginService]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
})
export class AppRountingModule { }
