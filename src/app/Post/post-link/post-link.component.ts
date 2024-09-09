import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../allposts/allposts.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-link',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './post-link.component.html',
  styleUrl: './post-link.component.css'
})
export class PostLinkComponent implements OnInit{
  
  @Input()
  post!:Post ; 
  ngOnInit(): void {
    
  }

}
