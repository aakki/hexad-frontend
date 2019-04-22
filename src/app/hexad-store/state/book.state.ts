import { IBook } from '../../models/book.interface';

export interface IBookState {
  books: IBook[];
  selectedBook: IBook;
}

export const initialBookState: IBookState = {
  books: null,
  selectedBook: null
};
