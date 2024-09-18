import { Injectable } from '@angular/core';
import { BackendUrlService } from './backend-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private backendUrl:BackendUrlService,private http:HttpClient,private logInService :LoginServiceService) { }

  Url = this.backendUrl.getUrl()
  token = this.logInService.getToken()
  
  GetAllBLog(page :number){

    return this.http.get(this.Url+"api/Blog/All?positoin=0")

  }

  GetBlogById(BlogId:string){
    return this.http.get(this.Url+`api/Blog/data/${BlogId}`)
  }


  CreateBlog(title:string,Description:string,personal:boolean):BehaviorSubject<Object>{
    let response = new BehaviorSubject({});
    let Body= {
      title:title ,
      desciption:Description ,
      personal:personal, 
    }
    
    this.token.subscribe (_token =>{
      const headers = new HttpHeaders({
        Authorization: `Bearer ${_token}`
      });

      this.http.post(this.Url+'api/Blog/CreateBlog',Body,{headers}).subscribe(
        {
          next: (value) => {
            response.next(value)
          },
          error: (error) =>{
            response.next(error)
          }
        }
      )

      

    })

    return response

    

  }

}
