import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
[x: string]: any;
  
  @Input()
  Count:BehaviorSubject<number> = new BehaviorSubject(0)
  

  numberArray! :Array<number>
  

  @Output()
  currentPage:EventEmitter<number> = new EventEmitter()

  ngOnInit(): void {
    this.Count.subscribe(
      (count)=>{
        
        let remainer :number = 10-( count % 10)
        let numberOfPages = (count +remainer) / 10
        
        this.numberArray = new Array<number>(numberOfPages)

      }
    )
    
  }

  clickButton(i: any):void {
    this.currentPage.emit(i)
    
  }

  
}


