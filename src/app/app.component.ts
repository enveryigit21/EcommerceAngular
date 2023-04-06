import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCategoryId!: number;

  onCategorySelected(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }
}
