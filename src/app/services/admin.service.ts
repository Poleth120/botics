import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const ADMIN_API = 'https://botics.azurewebsites.net/api/v1/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  tokens = this.token?.getToken();
  httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer '+this.tokens,  'Content-Type': 'application/json',  'Bypass-Tunnel-Reminder': 'njkjjk'})
  };

  internIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'intern/index', this.httpOptions);
  }

  internEnable(id: number): Observable<any> {
    return this.http.get(ADMIN_API + 'intern/enable/' + id, this.httpOptions);
  }

  internDisable(id: number): Observable<any> {
    return this.http.get(ADMIN_API + 'intern/disable/' + id, this.httpOptions);
  }

  labIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'lab/index', this.httpOptions);
  }

  computerIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'computer/index', this.httpOptions);
  }

  computerSave(computer: any): Observable<any> {
    return this.http.post(ADMIN_API + 'computer/save', computer, this.httpOptions)
  }

  computerUpdate(computer: any): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/update', computer, this.httpOptions)
  }

  computerIndexLab(idlab: number): Observable<any> {
    return this.http.get(ADMIN_API + 'computer/index/' + idlab, this.httpOptions);
  }

  computerEnable(idComputer: number): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/enable/' + idComputer, '', this.httpOptions);
  }

  computerDisable(idComputer: number): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/disable/' + idComputer, '', this.httpOptions);
  }

  computerAssign(idLab: number, idComputer: number): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/assign/' + idLab + '/' + idComputer, '', this.httpOptions);
  }

  computerUnAssign(idLab: number, idComputer: number, changeDetails: string): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/unassign/' + idLab + '/' + idComputer + '?changeDetails=' + changeDetails, '', this.httpOptions);
  }

  computerReAssign(idLab1: number, idLab2:number, idComputer: number, changeDetails: string): Observable<any> {
    return this.http.put(ADMIN_API + 'computer/reassign/' + idLab1 + '/' + idLab2 + '/' + idComputer + '?changeDetails=' + changeDetails, '', this.httpOptions);
  }

  register( username: string, email: string, firstName: string, lastName: string, role: any[], password: string): Observable<any> {
    console.log(role)
    let jsonO = {username: username, email: email, firstName: firstName, lastName: lastName, role: role, password: password}
    console.log(JSON.stringify( jsonO))
    return this.http.post(ADMIN_API + 'intern/save', jsonO, this.httpOptions);
  }


  commentIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'commentary/index', this.httpOptions)
  }

  ticketIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'ticket/index', this.httpOptions)
  }

  reserveIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'reserve/index', this.httpOptions)
  }

  historyIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'inventory/history/index', this.httpOptions)
  }
}
