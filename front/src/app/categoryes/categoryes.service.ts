import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryesService {

  constructor(private http: HttpClient) { }

  getCategoryes(): Observable<Category[]> {
    const url = 'http://localhost:3000/api/categoryes';
    return this.http.get<Category[]>(url);
  }
}
