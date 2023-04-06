import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  @Input() selectedCategoryId!: number;

  products: any = [];
  filteredProducts: Products[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.service.getProducts().subscribe(res => {
      this.products = res;
      this.filterProducts();
    });
  }

  filterProducts() {
    if (this.selectedCategoryId) {
      this.filteredProducts = this.products.filter((p:any) => p.categoryId === this.selectedCategoryId && p.stock > 0);
    } else {
      this.filteredProducts = this.products.filter((p:any) => p.stock > 0);
    }

    if (this.filteredProducts.length > 0) {
      this.products = this.filteredProducts;
    } else if (this.filteredProducts.length === 0) {
      this.products = this.products;
    }
  }
}
