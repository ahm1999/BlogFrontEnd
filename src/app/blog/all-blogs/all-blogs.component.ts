import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginServiceService } from '../../Services/login-service.service';

@Component({
  selector: 'app-all-blogs',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.css'
})
export class AllBlogsComponent implements OnInit {
  loggedIn:boolean = false

  constructor(private loggedInService :LoginServiceService)
  {

  }
  ngOnInit(): void {
    this.loggedInService.loggedIn.subscribe({
      next:value =>{
        this.loggedIn = value
      }
    }

    )
  
  }
  


}
