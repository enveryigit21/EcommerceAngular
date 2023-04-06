import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  priceFilterForm!: FormGroup;
  filteredProducts: any = [];
  @Output() filteredProductsEvent: EventEmitter<any> = new EventEmitter();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getForm();
    this.filterProducts();
  }


  getForm() {
    this.priceFilterForm = new FormGroup({
      minPrice: new FormControl(''),
      maxPrice: new FormControl('')
    });
  }

  filterProducts() {
    const minPrice = this.priceFilterForm.controls['minPrice'].value;
    const maxPrice = this.priceFilterForm.controls['maxPrice'].value;

    this.productService.getProducts().pipe(
      map(products => {
        return products.filter(product => {
          const price = product.price;
          return (minPrice ? price >= minPrice : true) && (maxPrice ? price <= maxPrice : true);
        });
      })
    ).subscribe(filteredProducts => {
      console.log(filteredProducts);
      this.filteredProducts = filteredProducts;
      this.filteredProductsEvent.emit(this.filteredProducts);
    });
  }


}
