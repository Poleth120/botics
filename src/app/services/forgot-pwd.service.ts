import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const FORGOT_API = 'http://localhost:8080/api/v1/auth/';

@Injectable({
  providedIn: 'root'
})
export class ForgotPwdService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  forgot(email: string): Observable<any> {
    return this.http.post(FORGOT_API + 'password/forgot', {email: email}, this.httpOptions);
  }

  reset(token: string, password: string, repassword: string): Observable<any> {
    return this.http.post(FORGOT_API + 'password/reset?token=' + token, {password: password, confirmPassword: repassword}, this.httpOptions);
  }
}
