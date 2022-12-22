import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';
const AUTH_API = 'https://botics.loca.lt/api/v1/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.tokens,  'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  labIndex(): Observable<any> {
    return this.http.get(AUTH_API + 'lab/index', this.httpOptions);
  }

  computerIndex(): Observable<any> {
    return this.http.get(AUTH_API + 'computer/index', this.httpOptions);
  }
}
