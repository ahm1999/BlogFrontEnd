import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoginServiceService } from './Services/login-service.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
constructor(private Login:LoginServiceService){

}

  ngOnInit(): void {

    let token:string|null = localStorage.getItem("AccessToken")
    if (token ===null || token === "") {
      return
      
    }
    this.Login.CheckToken(token).subscribe(
      {
        next: (value)=>{
          this.Login.setToken(token)
          this.Login.loggedIn.next(true)
          
        },
        error: (error)=>{
          console.log(error);
          
        }
      }
    )
  }
  title = 'BlogFrontend';


}
