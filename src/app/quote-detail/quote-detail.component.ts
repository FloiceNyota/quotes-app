import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }


  submitUpvote(quote){
    quote.upvote=quote.upvote+1;
  }

  submitDownvote(quote){
    quote.downvote=quote.downvote+1;
  }

  constructor() { }

  ngOnInit() {
  }

}

