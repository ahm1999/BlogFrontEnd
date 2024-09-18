import { Injectable } from '@angular/core';
import { BackendUrlService } from './backend-url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  url:string = this.urlService.getUrl();


  constructor(private urlService :BackendUrlService,private http:HttpClient) { }

  getPost(page:Number){
      return this.http.get(this.url+`Posts/All?positoin=${page}`)
  }

  getPostById(id:string){
    return this.http.get(this.url+`Posts/${id}`)

  }

  getPostCount(){
    return this.http.get(this.url+`Posts/Count`)
  }

  getBlogPosts(blogId:string){
    return this.http.get(this.url+`Posts/Blog/${blogId}`)
  }
}
