import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpsService } from '../HttpService/https.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base = environment.baseUrl;
  constructor(private httpService : HttpsService) { }

  Login(data : any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.base+`User/Login`, data, false, header);
  }

  Register(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.base+`User/Register`, data, false, header);
  }

  ForgotPwd(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.base+`User/ForgotPwd?Email=`+data.email, {}, false, header);
  }


  ResetPwd(reqData : any, token : any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    return this.httpService.PutService(this.base+`User/ResetNewPassword`, reqData, true, header);
  }
}
