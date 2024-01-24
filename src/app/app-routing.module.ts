import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOrSignupComponent } from './Components/login-or-signup/login-or-signup.component';
import { ForgotPwdComponent } from './Components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './Components/reset-pwd/reset-pwd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path : '', component : LoginOrSignupComponent},
  {path : 'loginOrsignup', component : LoginOrSignupComponent},
  {path : 'forgotpwd', component : ForgotPwdComponent},
  {path : 'resetpwd/:token', component : ResetPwdComponent},
  {path : 'dashboard', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
