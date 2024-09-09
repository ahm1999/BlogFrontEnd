import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-by-id',
  standalone: true,
  imports: [],
  templateUrl: './blog-by-id.component.html',
  styleUrl: './blog-by-id.component.css'
})
export class BlogByIdComponent {


blogId = ''  
constructor(route :ActivatedRoute){
  this.blogId = route.snapshot.params["blogId"]
}

}
