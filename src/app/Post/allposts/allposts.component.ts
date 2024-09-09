import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsServiceService } from '../../Services/posts-service.service';
import { Title } from '@angular/platform-browser';
import { PostLinkComponent } from "../post-link/post-link.component";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-allposts',
  standalone: true,
  imports: [PostLinkComponent,CommonModule],
  templateUrl: './allposts.component.html',
  styleUrl: './allposts.component.css'
})
export class AllpostsComponent implements OnInit,OnDestroy {

  mySubscription: Subscription | undefined;
  postArray!:Post[] ;
  page:number =0;

  constructor(private postService:PostsServiceService){

  }
  ngOnDestroy(): void {
    this.mySubscription?.unsubscribe()
    
  }

  ngOnInit(): void {
  this.mySubscription = this.postService.getPost(this.page).subscribe((Posts:any)=>{
    this.postArray = Posts
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