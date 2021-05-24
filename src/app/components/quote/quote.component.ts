import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote = [
    new Quote(1,'Floice','A sum can be put right;but only by going back till you find the erroe and working it afresh from that point,never by simply going on.','C.S Lewis', new Date(2001,2,27),0,0),
    new Quote(2,'Lanka','Focus on giants,you stumble, focus on God,giants tumble','Max Lucado',new Date(1999,12,23),0,0),
    new Quote(3,'Dag','God is more glorified in us when we are most satisfied in Him','Hans Urs',new Date(1959,12,21),0,0),
    new Quote(4,'Behan','What you are is Gods gift to you,what you become is your gift to God','John Piper',new Date(2020,10,10),0,0),
    new Quote(5,'Dorothy','Rejection is an opportunity for your selection','Bernard Branson',new Date(2021,12,07),0,0)
  ];
  


}
