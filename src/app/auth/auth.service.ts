import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { JwtResponce } from './jwt-response';
import { AuthLoginInfo } from "./auth-login-info";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8088/auth/login';

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponce> {
    return this.http.post<JwtResponce>(this.loginUrl, credentials, httpOptions);
  }

  constructor(private http: HttpClient) { }
}