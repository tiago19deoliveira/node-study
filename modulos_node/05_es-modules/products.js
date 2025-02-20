const { createDecipheriv } = require("crypto");

export class Product {
  constructor(id, name, price) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
  getInfo() {
    return `ÌD do produto ${this.id}; Preço do produto ${this.price}; Nome do Produto : ${this.name}`;
  }
}

export function createProduct(id, name, prince) {
  return new Product(id, name, prince);
}

export const productPrice = 200;

export default productPrice;
// module.exports = {
//   createProduct: createProduct,
//   Product: Product,
// };
