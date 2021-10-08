import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class AppService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    const url = 'http://localhost:3000/api/users';
    return this.http.get(url);
  }

}
