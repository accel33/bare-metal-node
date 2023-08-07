const products = require('../data/products')

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

function findById(id) {
  function cb(resolve, reject) {
    return resolve(products.find(element => element === id))
  }
  const promise = new Promise(cb)
  return promise
}

module.exports = { findAll, findById }