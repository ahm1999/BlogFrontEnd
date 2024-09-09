import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../blog-links/blog-links.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-window',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-window.component.html',
  styleUrl: './blog-window.component.css'
})
export class BlogWindowComponent implements OnInit {
  ngOnInit(): void {
   
  }
  
  @Input()
  blog!:Blog




}
