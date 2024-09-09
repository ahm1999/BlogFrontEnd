import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../Services/blog.service';
import { LoginServiceService } from '../../Services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-blog-form.component.html',
  styleUrl: './create-blog-form.component.css'
})
export class CreateBlogFormComponent {

constructor(private blogService:BlogService ,logIn:LoginServiceService,private router:Router ){

}  


submitForm() {
    

  this.blogService.CreateBlog(this.title,this.Description,this.private).subscribe({
    next:(response:any)=>{
      console.log(response);
      let createdBLogId  = response.blogId
 
      this.router.navigateByUrl(`/blogs/Id/${createdBLogId}`)
    },
    error:(error)=>{
      console.log(error);
      
    }
  })
    
}
  title:string ="";
  Description:string ="";
  private :boolean =true;


}

