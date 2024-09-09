import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendUrlService } from './backend-url.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private Url:string = this.backendUrl.getUrl()
  constructor(private http:HttpClient,private backendUrl :BackendUrlService) {

   }
   ;
   SignUp(name:string,email:string,password:string):Observable<Object>{
    let body = {
      name: name,
      email: email,
      password: password
    }
   
    return this.http.post(this.Url+"Auth/register",body)


   
}

}
