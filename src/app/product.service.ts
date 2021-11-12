import { Injectable } from '@angular/core';
import { Product } from './product.modele';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  public getProducts() {
    // let products: Product[];

    // products = [
    //   new Product(1, 'Memory Card', 500),
    //   new Product(1, 'Pen Drive', 750),
    //   new Product(1, 'Power Bank', 100),
    // ];
    // return products;
    return [
      new Product(1, 'Memory Card', 500),
      new Product(1, 'Pen Drive', 750),
      new Product(1, 'Power Bank', 100),
    ]
  }
}
