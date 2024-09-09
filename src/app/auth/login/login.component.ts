import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginResponse, LoginServiceService } from '../../Services/login-service.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../Services/current-user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  email:string = ""
  password :string = ""
  errorMassege:string = ""   

constructor(private Login :LoginServiceService,private router:Router,private UserData:CurrentUserService){

}  
onSubmit() {

  if (this.email  ==="" ||this.password==="") {
    this.errorMassege = "Some field Are empty"
    return
  }
 

  this.Login.SendLoginPost(this.email,this.password)
  .subscribe(
    {next: (value:any) =>{
      console.log(value);
      
      this.errorMassege = "Logged In You will be redirected"
      this.Login.loggedIn.next(true) 
      this.Login.setToken(value.token)
      localStorage.setItem("AccessToken",value.token)
      this.UserData.setValues(value.email,value.id,value.name,value.role)
      this.router.navigateByUrl("/")

    }
     ,
      error:(error)=>{
         this.errorMassege = "User Name or password is wrong" 
      }
      
    
})
  
}

navigateToSignup() {
  this.router.navigateByUrl("/auth/signup")
  
}


}
