import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../Services/blog.service';
import { PostsServiceService } from '../../Services/posts-service.service';
import { Post } from '../../Post/allposts/allposts.component';

@Component({
  selector: 'app-blog-by-id',
  standalone: true,
  imports: [],
  templateUrl: './blog-by-id.component.html',
  styleUrl: './blog-by-id.component.css'
})
export class BlogByIdComponent implements OnInit{


blogId = ''  
blogTitle = ''
blogDescription = ''
creatorName = ''
Posts!:Post[]
personal :boolean =false
constructor(private route :ActivatedRoute,private blogService:BlogService ,private postService:PostsServiceService){
}
  ngOnInit(): void {
    this.blogId = this.route.snapshot.params["blogId"]

        this.blogService.GetBlogById(this.blogId).subscribe(
          {
            next:(value:any)=>{
              console.log(value);
              
              this.blogTitle = value.bLogTitle
              this.blogDescription = value.blogDesctiption
              this.creatorName = value.creatorName
              this.personal = value.personal
    
              
            },
            error:(error) =>{
              console.log(error);
              
            }
          }
        )


      this.postService.getBlogPosts(this.blogId).subscribe(
        (value :any) =>{
          console.log(this.Posts);
          this.Posts = value
        }
      ) 
      
    
  }
  





}
