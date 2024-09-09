import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit   {

loggedIn:boolean = false
LogOut() {

this.LoginService.loggedIn.next(false)
this.LoginService.setToken("")
localStorage.setItem("AccessToken","")
}
 
  constructor(private LoginService: LoginServiceService){
    
  }
  ngOnInit(): void {
    this.LoginService.loggedIn.subscribe({
      next:value =>{
        this.loggedIn = value
      }
    })
  }

}
