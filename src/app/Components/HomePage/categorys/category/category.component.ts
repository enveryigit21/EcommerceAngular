import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  priceFilterForm!: FormGroup;
  @Output() filteredProductsEvent = new EventEmitter<any>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getForm();
  }

  getForm(){
    this.priceFilterForm = new FormGroup({
      minPrice: new FormControl(''),
      maxPrice : new FormControl('')
    })
  }

  filterProducts() {
    const minPrice = this.priceFilterForm.get('minPrice')?.value;
    const maxPrice = this.priceFilterForm.get('maxPrice')?.value;

    this.productService.getProducts().pipe(
      map(products => products.filter((product: any) => {
        return product.price >= minPrice && product.price <= maxPrice;
      }))
    ).subscribe(filteredProducts => {
      this.filteredProductsEvent.emit(filteredProducts);
    });
  }
}
