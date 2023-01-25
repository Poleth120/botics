import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const INTERN_API = 'https://botics.azurewebsites.net/api/v1/intern/';

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
    return this.http.get(INTERN_API + 'manage/reserve/index', this.httpOptions);
  }

  ticketIndex(): Observable<any> {
    return this.http.get(INTERN_API + 'manage/ticket/index', this.httpOptions);
  }

  responseTicket(idUser: number, idTicket: number, response: any): Observable<any> {
    return this.http.post(INTERN_API + 'manage/ticket/response/' + idUser + '/' + idTicket, response, this.httpOptions);
  }

  responseReserve(idUser: number, idReserve: number, response: any): Observable<any> {
    return this.http.post(INTERN_API + 'manage/reserve/response/' + idUser + '/' + idReserve, response, this.httpOptions);
  }
}
