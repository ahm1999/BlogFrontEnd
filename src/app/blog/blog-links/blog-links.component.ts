import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Subscription } from 'rxjs';
import { BlogWindowComponent } from "../blog-window/blog-window.component";

@Component({
  selector: 'app-blog-links',
  standalone: true,
  imports: [CommonModule, BlogWindowComponent],
  templateUrl: './blog-links.component.html',
  styleUrl: './blog-links.component.css'
})
export class BLogLinksComponent implements OnInit ,OnDestroy{

  blogs!:any ;

  subscription :Subscription|undefined
  page :number = 0
  blog: any;
  constructor(private blogService :BlogService){}
  ngOnDestroy(): void {
    
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.subscription = this.blogService.GetAllBLog(this.page).subscribe({
      next:(response:any)=>{
        this.blogs = response.blogs
        console.log(this.blogs);
        
      }
      ,error:(error) =>{
        console.log(error)
      }
    })
  }

}

export interface Blog {
createdOn:Date 
creatorId:string
desciption:string 
id:string
personal:boolean
title:string
}