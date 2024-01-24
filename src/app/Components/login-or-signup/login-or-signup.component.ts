import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-login-or-signup',
  templateUrl: './login-or-signup.component.html',
  styleUrls: ['./login-or-signup.component.scss']
})
export class LoginOrSignupComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }
  ngOnInit(): void {
    
  }

  loginForm = new  FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$")])
  })

  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    mobNo: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern("^(0|91)?[6-9][0-9]{9}$")]),
    dob : new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required])
  })


  RedirectToForgotPwd(){
    this.router.navigate(['/forgotpwd']);
  }
  
  onLogin(){
    console.log(this.loginForm)
    let data={
      email : this.loginForm.value.email,
      pwd : this.loginForm.value.password
    }
    this.userService.Login(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
      localStorage.setItem("token",res.data);
      if(res.data != null){
        this.router.navigate(['/dashboard'])
      }
    });
    
  }

  onSignup(){

    let date: string = new Date(this.signupForm.value.dob).toLocaleDateString();
      let data={
        userName:this.signupForm.value.userName,
        email : this.signupForm.value.email,
        pwd : this.signupForm.value.pwd,
        mobNo: this.signupForm.value.mobNo,
        dob : date,
        address : this.signupForm.value.address
      }
      this.userService.Register(data).subscribe((res:any)=>{
        console.log(res.message);
        console.log(res.data);
      })
      this.router.navigate(['/loginOrsignup'])
  }

}
