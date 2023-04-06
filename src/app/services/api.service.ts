import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getCategories() {
    const url = `${this.REST_API_SERVER}/categories`;
    return this.httpClient.get(url);
  }

  public getProductsByCategory(categoryId: number) {
    const url = `${this.REST_API_SERVER}/products?categoryId=${categoryId}`;
    return this.httpClient.get(url);
  }
}
