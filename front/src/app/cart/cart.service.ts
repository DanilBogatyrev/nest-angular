import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  sendCart(cartToSend): Observable<any> {
    const url = 'http://localhost:3000/api/cart';
    return this.http.post(url, cartToSend);
  }
}
