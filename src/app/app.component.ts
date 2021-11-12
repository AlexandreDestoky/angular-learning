import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product.modele';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, LoggerService],
})
export class AppComponent {
  products: Product[];

  constructor(private productService: ProductService) {}
  getProducts() {
    this.products = this.productService.getProducts();
  }
}
