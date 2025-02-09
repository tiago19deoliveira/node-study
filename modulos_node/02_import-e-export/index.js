console.log("i am man");

require("./helloExport");
const { createProduct, Product } = require("./products");

const product = createProduct("2", "kenga", "idont n");

const product2 = new Product("3", "Iphone", "version 14");

console.log(product.getInfo());
console.log(product2.getInfo());
