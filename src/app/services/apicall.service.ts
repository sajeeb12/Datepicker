import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userListResponse } from '../models/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private http = inject(HttpClient)
  constructor() { }
  getUserList():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
