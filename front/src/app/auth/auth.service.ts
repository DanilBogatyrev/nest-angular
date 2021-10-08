import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<{ token: string }> {
    const url = 'http://localhost:3000/api/auth/login';
    return this.http.post<{ token: string }>(url, user);
  }

  registration(user: User): Observable<any> {
    const url = 'http://localhost:3000/api/auth/registration';
    return this.http.post(url, user);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
