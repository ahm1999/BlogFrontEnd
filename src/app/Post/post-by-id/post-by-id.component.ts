import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post-by-id',
  standalone: true,
  imports: [],
  templateUrl: './post-by-id.component.html',
  styleUrl: './post-by-id.component.css'
})
export class PostByIdComponent {

  
  PostId :string= ""
  
  constructor(route :ActivatedRoute){
    this.PostId =  route.snapshot.params["postId"]
  }
}
