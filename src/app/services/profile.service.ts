import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const PROFILE_API = 'https://botics.azurewebsites.net/api/v1/profile/';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokens,
      'Bypass-Tunnel-Reminder': 'njkjjk',
    }),
  };

  httpOptionsF = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokens,
      'Bypass-Tunnel-Reminder': 'njkjjk',
    }),
  };

  getProfile(): Observable<any> {
    return this.http.get(PROFILE_API, this.httpOptions);
  }

  updateProfileInfo(profileInfo: any): Observable<any> {
    return this.http.post(
      PROFILE_API + 'update/info',
      profileInfo,
      this.httpOptions
    );
  }

  updateAvatar(avatar: any): Observable<any> {
    return this.http.put(
      PROFILE_API + 'update/avatar',
      avatar,
      this.httpOptionsF
    );
  }
}
