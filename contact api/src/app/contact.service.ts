import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContactService {
  private _url = 'something';

  getContacts() {
    return this.http.get(this._url);
  }

  constructor(private http: HttpClient) { }
}
