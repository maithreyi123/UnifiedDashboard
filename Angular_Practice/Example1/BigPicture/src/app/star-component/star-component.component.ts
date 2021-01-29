import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnChanges { // example of displays stars, so implementing onchanges method
  
  @Input() rating: number;  //@Input decorator is used to expose this property as input and reciceve data(input data) from container components(other componets) so that we can get data 
  startWidth: number;

  @Output() ratingClicked : EventEmitter<string> =   //@OUTPUT IS USED  to send data back to container component (product-list) by raised an event, here declared variable shld be of event datatype
                     new EventEmitter<string>();

  constructor() { }

  //here onchnages method watches only when chnages made to input properties and exceutes this method
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
    this.startWidth = this.rating * 75 / 5;    // some logic to convert numbers to provide stars
  }


  OnClick() {  // creating method to used that variable with emit , here emit method raises the event when clicking that and calling this method in star.html
    this.ratingClicked.emit(`the rating ${this.rating} is clicked`);  // use only backticks when u want to get rating variable value
  }

  ngOnInit(): void {
  }

}
