import { Component } from '@angular/core';
import { Product } from './product.modele';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products:Product[];
  productService:ProductService;

  constructor() {
    this.productService = new ProductService();
  }
  getProducts() {
    this.products = this.productService.getProducts();
    console.log(this.products)
  }

}
