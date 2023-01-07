import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const ADMINISTRATIVE_API = 'https://boticssys.loca.lt/api/v1/administrative/';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.tokens,  'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  indexTicket(idUser: number): Observable<any> {
    return this.http.get(ADMINISTRATIVE_API + 'ticket/index/' + idUser, this.httpOptions);
  }

  indexCommentary(idUser: number) : Observable<any> {
    return this.http.get(ADMINISTRATIVE_API + 'commentary/index/' + idUser, this.httpOptions);
  }

  saveTicket(idUser: number, ticket: any): Observable<any> {
    return this.http.post(ADMINISTRATIVE_API + 'ticket/' + idUser, ticket, this.httpOptions);
  }

  saveCommentary(idUser: number, commentary: any): Observable<any> {
    return this.http.post(ADMINISTRATIVE_API + 'commentary/' + idUser, commentary, this.httpOptions);
  }

  responseCommentary(idUser: number, idCommentary: number, response: any): Observable<any> {
    return this.http.post(ADMINISTRATIVE_API+ 'manage/commentary/response/' + idUser + '/' + idCommentary, response, this.httpOptions);
  }

  indexNoCommentary(idUser: number) : Observable<any> {
    return this.http.get(ADMINISTRATIVE_API + 'manage/commentary/index/' + idUser, this.httpOptions);
  }
}
