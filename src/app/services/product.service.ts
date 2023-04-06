import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  apiUrl = 'https://fakestoreapi.com/products'
  priceFilterForm: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }

  getProducts() : Observable<Products> {
    return this.http.get<Products>(this.apiUrl)
  }

}
