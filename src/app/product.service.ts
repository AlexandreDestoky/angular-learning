import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product.modele';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class ProductService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('Product Service Constructed');
  }
  public getProducts() {
    let products: Product[] = [
      new Product(1, 'Memory Card', 500),
      new Product(1, 'Pen Drive', 750),
      new Product(1, 'Power Bank', 100),
    ];
    this.loggerService.log(products);
    return products;
  }
}
