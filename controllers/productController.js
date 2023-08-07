const Products = require('../models/productModel')
// const dataProducts = require('../data/products')

async function getProducts() {
  try {
    const products = await Products.findAll()
    console.log(products);
    // const products = dataProducts
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