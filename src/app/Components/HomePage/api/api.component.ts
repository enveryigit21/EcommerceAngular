import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

   products: any = []
   @Input() filteredProducts: any = [];

   constructor(private service:ProductService) {}

   ngOnInit(): void {
    this.getProductsList() ;
   }

   getProductsList() {
    this.service.getProducts().subscribe(res => {
      this.products = res;
    })
  }

}
