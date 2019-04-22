import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IBookHttp } from '../models/http-models/book-http.interface';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = `${environment.apiUrl}books.json`;

  constructor(private _http: HttpClient) { }
  getBooks(): Observable<IBookHttp> {
    return this._http.get<IBookHttp>(this.booksUrl);
  }
}
