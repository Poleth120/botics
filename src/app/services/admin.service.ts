import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const ADMIN_API = 'https://botics.loca.lt/api/v1/admin/';

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
    return this.http.get(ADMIN_API + 'lab/index', this.httpOptions);
  }

  computerIndex(): Observable<any> {
    return this.http.get(ADMIN_API + 'computer/index', this.httpOptions);
  }

  computerSave(computer: any): Observable<any> {
    console.log(computer)
    return this.http.post(ADMIN_API + 'computer/save', computer, this.httpOptions)
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

  computerDelete(hostName: string): Observable<any> {
    return this.http.delete(ADMIN_API + 'computer/delete/' + hostName, this.httpOptions);
  }
}
