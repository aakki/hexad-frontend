import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IBookState } from '../state/book.state';

const selectBooks = (state: IAppState) => state.books;

export const selectBookList = createSelector(
  selectBooks,
  (state: IBookState) => state.books
);

export const selectSelectedBook = createSelector(
  selectBooks,
  (state: IBookState) => state.selectedBook
);
