export class Product {
  constructor(productID: number, name: string, price: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
  }
  productID: number;
  name: string;
  price: number;
}
// export class Product {
//   constructor(public productID: number,public name: string,public price: number) {

//   }

// }
