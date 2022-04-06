import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  URL = "https://run.mocky.io/v3/76d0c69e-c026-4738-92f0-22244f6ba724";
  // URL = "https://selfbibackendtest.azurewebsites.net";
  
  constructor(private http: HttpClient) { }
  
  getStats(): Observable<any> {
    return this.http.get<any>(this.URL);
  }


}
