import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetBooksSuccess,
  EBookActions,
  GetBookSuccess,
  GetBook,
  GetBooks
} from '../actions/book.actions';
import { BookService } from '../../services/book.service';
import { IBookHttp } from '../../models/http-models/book-http.interface';
import { selectBookList } from '../selectors/book.selector';

@Injectable()
export class BookEffects {
  @Effect()
  getBook$ = this._actions$.pipe(
    ofType<GetBook>(EBookActions.GetBook),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectBookList))),
      switchMap(([id, books]) => {
        const selectedBook = books.filter(book => book.id === +id)[0];
      return of(new GetBookSuccess(selectedBook));
    })
  );

  @Effect()
  getBooks$ = this._actions$.pipe(
    ofType<GetBooks>(EBookActions.GetBooks),
      switchMap(() => this._bookService.getBooks()),
      switchMap((bookHttp: IBookHttp) => of(new GetBooksSuccess(bookHttp.books)))
  );

  constructor(
    private _bookService: BookService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
