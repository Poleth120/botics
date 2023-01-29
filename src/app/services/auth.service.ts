import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'https://botics.azurewebsites.net/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Bypass-Tunnel-Reminder': 'njkjjk'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private token: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  tokens = this.token?.getToken();

  httpOptionsLo = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.tokens,  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', '', this.httpOptionsLo)
  }

  register( username: string, email: string, firstName: string, lastName: string, role: any[], password: string): Observable<any> {
    console.log(role)
    let jsonO = {username: username, email: email, firstName: firstName, lastName: lastName, role: role, password: password}
    console.log(JSON.stringify( jsonO))
    return this.http.post(AUTH_API + 'signup', jsonO, httpOptions);
  }

  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', {
      refreshToken: token
    }, httpOptions);
  }
}
