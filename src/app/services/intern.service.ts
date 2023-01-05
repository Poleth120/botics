import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const INTERN_API = 'https://botics.loca.lt/api/v1/intern/';

@Injectable({
  providedIn: 'root'
})
export class InternService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.tokens,  'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  reserveIndex(): Observable<any> {
    return this.http.get(INTERN_API + '/manage/reserve/index', this.httpOptions);
  }
}
