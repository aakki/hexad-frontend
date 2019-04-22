import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  @Input() id: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  inputName: string;
  ngOnInit() {
    this.inputName = this.id + '_rating';
  }
  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      id: this.id,
      rating: rating
    });
  }

}
