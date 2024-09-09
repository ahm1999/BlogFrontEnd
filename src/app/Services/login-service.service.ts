import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private Url:string = this.backendUrl.getUrl()
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private LogInToken:BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor(private http :HttpClient,private backendUrl:BackendUrlService) {

   }
   public SendLoginPost(email:string,password:string) :Observable<Object> {
    
    let body = {
      email: email,
      password: password
    }
    return this.http.post(this.Url+"Auth/login",body)
   }

   public CheckToken(token :string) :Observable<Object>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get(this.Url+"Auth/CheckToken",{headers})
   }

   public setToken(token:string){
    this.LogInToken.next(token)
   }
   public getToken():BehaviorSubject<string>{
    return this.LogInToken
   }



}


export class LoginResponse {
  LoginStatues: boolean;
  LoginMessege :string ; 
  constructor(LoginStatues: boolean,LoginMessege:string) {
    this.LoginStatues = LoginStatues;
    this.LoginMessege = LoginMessege;
  }
}