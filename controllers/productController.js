const Products = require('../models/productModel')

async function getProducts() {
  try {
    const products = await Products.findAll()
    console.log(products);
    return products
  } catch (e) {
    console.log(e);
  }
}

async function getProductsById(id) {
  const product = await Products.find(id)
  return product
}

module.exports = { getProducts, getProductsById }