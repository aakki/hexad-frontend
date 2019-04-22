import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { IAppState } from './hexad-store/state/app.state';
import { selectConfig } from './hexad-store/selectors/config.selector';
import { GetConfig } from './hexad-store/actions/config.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hexad-frontend';

  config$ = this._store.pipe(select(selectConfig));
  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
