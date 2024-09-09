import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignUpService } from '../../Services/sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
email: string= "";
password: string = "";
errorMassege: string ="";
name: string = "";

constructor (private signUp :SignUpService,private router:Router)
{

}
onSubmit() {
  if (this.email ==="" ||this.name===""||this.password ==="") {
    this.errorMassege = "some inputs are missing"
    return
  }

  this.signUp.SignUp(this.name,this.email,this.password).subscribe({
    next:(value:any)=>{
      
      this.errorMassege = value.title
      this.router.navigateByUrl("/auth/login")
    },
    error:(error:any)=>{
      this.errorMassege =error.error.title

    }
  })

}

}
