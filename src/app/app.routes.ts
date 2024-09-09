import { Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AllpostsComponent } from './Post/allposts/allposts.component';
import { AllBlogsComponent } from './blog/all-blogs/all-blogs.component';
import { CreateBlogFormComponent } from './blog/create-blog-form/create-blog-form.component';
import { BLogLinksComponent } from './blog/blog-links/blog-links.component';
import { PostByIdComponent } from './Post/post-by-id/post-by-id.component';
import { BlogByIdComponent } from './blog/blog-by-id/blog-by-id.component';

export const routes: Routes = [
    {path:"",component:AllpostsComponent , title: 'IBLog'},  
    {path:"auth/signup",component:SignupComponent,title :'Sign Up'},
    {path:"auth/login",component:LoginComponent,title:'Log in'},
    {path:'blogs',component:AllBlogsComponent, title: 'All Blogs',
        children:[
            {
                path:"",
                component:BLogLinksComponent
            }
            ,{
            path:"CreateBlog", 
            component:CreateBlogFormComponent
            },{
            path:"Id/:blogId",
            component:BlogByIdComponent
        
        }

        ]
    },
    {path:'posts/:postId',component:PostByIdComponent}


];
