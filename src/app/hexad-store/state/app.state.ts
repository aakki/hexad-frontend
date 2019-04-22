import { RouterReducerState } from '@ngrx/router-store';

import { IBookState, initialBookState } from './book.state';
import { initialConfigState, IConfigState } from './config.state';


export interface IAppState {
  router?: RouterReducerState;
  books: IBookState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  books: initialBookState,
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
