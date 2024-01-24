import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';






import { LoginOrSignupComponent } from './Components/login-or-signup/login-or-signup.component';
import { ForgotPwdComponent } from './Components/forgot-pwd/forgot-pwd.component';
import { ResetPwdComponent } from './Components/reset-pwd/reset-pwd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ButtonsComponent } from './Components/buttons/buttons.component';
import { StatusComponent } from './Components/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginOrSignupComponent,
    ForgotPwdComponent,
    ResetPwdComponent,
    DashboardComponent,
    SidebarComponent,
    ButtonsComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
