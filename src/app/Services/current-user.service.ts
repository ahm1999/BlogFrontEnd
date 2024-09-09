import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  
email :string= ""
id :string= ""
name :string= ""
role:string =""

setValues(email:string,id:string,name:string,role:string){
  this.email = email
  this.id = id
  this.name = name
  this.role = role
}
}

