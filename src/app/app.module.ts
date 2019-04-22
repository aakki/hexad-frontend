import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookEffects } from './hexad-store/effects/book.effects';
import { ConfigEffects } from './hexad-store/effects/config.effects';
import { BookService } from './services/book.service';
import { appReducers } from './hexad-store/reducers/app.reducers';

import { BooksComponent as BooksContainerComponent } from './containers/books/books.component';
import { BooksComponent } from './components/books/books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksContainerComponent,
    BooksComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([BookEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
