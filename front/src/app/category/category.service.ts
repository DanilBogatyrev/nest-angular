import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getProductsByCategory(id: number): Observable<Product[]> {
    const url = 'http://localhost:3000/api/categoryes/' + id;
    return this.http.get<Product[]>(url);
  }
}
