import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "https://run.mocky.io/v3/2ec321dc-e470-4e60-bcaf-05780afdcf96"
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

}
