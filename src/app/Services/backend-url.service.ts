import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendUrlService {

  Url = "http://localhost:5075/" 
  constructor() { }

  
getUrl(){
  return this.Url

}
  
}
