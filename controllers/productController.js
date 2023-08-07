const Products = require('../models/productModel')

function getProducts() {
  const products = Products.findAll()
  return products
}

function getProductsById(id) {
  const product = Products.find(id)
  return product
}

module.exports = { getProducts, getProductsById }