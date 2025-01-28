class Product {
  constructor(id, name, price) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
  getInfo() {
    return `ÌD do produto ${this.id}; Preço do produto ${this.price}`;
  }
}

function createProduct(id, name, prince) {
  return new Product(id, name, prince);
}

module.exports = createProduct;
