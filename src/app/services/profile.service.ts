import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const PROFILE_API = 'https://botics.loca.lt/api/v1/profile/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  tokens = this.token?.getToken();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.tokens,  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  getProfile(): Observable<any> {
    return this.http.get(PROFILE_API, this.httpOptions);
  }
}
