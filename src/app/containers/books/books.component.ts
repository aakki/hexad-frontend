import { GetBooks } from './../../hexad-store/actions/book.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookList } from '../../hexad-store/selectors/book.selector';
import { IAppState } from '../../hexad-store/state/app.state';
import { Router } from '@angular/router';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$ = this._store.pipe(select(selectBookList));

  constructor(private _store: Store<IAppState>, private _router: Router) {this.books$.subscribe((data)=>console.log(data))}

  ngOnInit() {
    this._store.dispatch(new GetBooks());
  }
}
