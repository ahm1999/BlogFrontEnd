import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsServiceService } from '../../Services/posts-service.service';
import { Title } from '@angular/platform-browser';
import { PostLinkComponent } from "../post-link/post-link.component";
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PaginationComponent } from "../../pagination/pagination.component";

@Component({
  selector: 'app-allposts',
  standalone: true,
  imports: [PostLinkComponent, CommonModule, PaginationComponent],
  templateUrl: './allposts.component.html',
  styleUrl: './allposts.component.css'
})
export class AllpostsComponent implements OnInit,OnDestroy {
changePage(arg0: any) {
  this.page = arg0
  this.mySubscription = this.postService.getPost(arg0).subscribe((Posts:any)=>{
    this.postArray = Posts

})}

  mySubscription: Subscription | undefined;
  postArray!:Post[] ;
  page:number =0;
  postCount:BehaviorSubject<number> = new BehaviorSubject( 0);
  constructor(private postService:PostsServiceService){

  }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe()
    
  }

  ngOnInit(): void {
  this.mySubscription = this.postService.getPost(this.page).subscribe((Posts:any)=>{
    this.postArray = Posts
    })
  
  this.postService.getPostCount().subscribe((res:any)=>{
    
    this.postCount?.next(res.count)
  })
  
    

  } 
    
  }


export interface Post {
addedOn:Date;
blogId:string; 
content:string;
id:string;
title:string;
userId:string;
}