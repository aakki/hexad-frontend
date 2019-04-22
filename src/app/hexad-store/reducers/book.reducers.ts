import { EBookActions } from './../actions/book.actions';
import { BookActions } from '../actions/book.actions';
import { initialBookState, IBookState } from '../state/book.state';

export const bookReducers = (
  state = initialBookState,
  action: BookActions
): IBookState => {
  switch (action.type) {
    case EBookActions.GetBooksSuccess: {
      return {
        ...state,
        books: action.payload
      };
    }
    case EBookActions.GetBookSuccess: {
      return {
        ...state,
        selectedBook: action.payload
      };
    }

    default:
      return state;
  }
};
