import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { IBook } from '../../models/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input()
  books: any;
  items: any;
  @Output()
  bookSelected: EventEmitter<number> = new EventEmitter();
  @ViewChild('booksTable') table;
  isPlay: boolean = false;
  ratingClicked: number;
  itemIdRatingClicked: string;

  constructor() { }

  ngOnInit() {
    this.items = this.books;
  }

  ratingComponentClick(clickObj: any): void {
    this.items = this.books.find(((i: any) => i.id === clickObj.itemId));
    if (!!this.items) {
      this.books.rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = this.items.title;
    }
  }

  randomRating(): void {
    let rating: any;
    if (!this.isPlay) {
      this.items = this.books;
      this.isPlay = true;
      rating = setTimeout(() => {
        if (!!this.items) {
          for (var i = 0; i < this.items.length; i++)
            this.items[i].rating = Math.floor((Math.random() * 5) + 1);
        }
      }, Math.random() * 2000);
    } else {
      this.isPlay = false;
      this.books = this.items;
      clearTimeout(rating);
    }
  }
}
