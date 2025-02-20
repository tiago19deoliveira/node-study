// const { createProduct, Product } = require("./products");
// import { createProduct, Product } from "./products.js";
//importando de módulo não compatível com es import export
import lodash from "lodash";
const { filter } = lodash;

import productPrice, { Product, createProduct } from "./products.js";

const product = createProduct("2", "kenga", "idont n", productPrice);

const product2 = new Product("3", "Iphone", "version 14");

console.log(product.getInfo());
console.log(product2.getInfo());
