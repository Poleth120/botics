import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const TEACHER_API = 'https://botics.azurewebsites.net/api/v1/teacher/';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.tokens,  'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  indexReserve(idUser: number): Observable<any> {
    return this.http.get(TEACHER_API + 'reserve/index/' + idUser, this.httpOptions);
  }

  indexTicket(idUser: number): Observable<any> {
    return this.http.get(TEACHER_API + 'ticket/index/' + idUser, this.httpOptions);
  }

  indexCommentary(idUser: number) : Observable<any> {
    return this.http.get(TEACHER_API + 'commentary/index/' + idUser, this.httpOptions);
  }

  saveReserve(idUser: number, reserve: any): Observable<any> {
    return this.http.post(TEACHER_API + 'reserve/' + idUser, reserve, this.httpOptions);
  }

  saveTicket(idUser: number, ticket: any): Observable<any> {
    return this.http.post(TEACHER_API + 'ticket/' + idUser, ticket, this.httpOptions);
  }

  saveCommentary(idUser: number, commentary: any): Observable<any> {
    return this.http.post(TEACHER_API + 'commentary/' + idUser, commentary, this.httpOptions);
  }
}
