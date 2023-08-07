const products = require('../data/products')

function findAll() {
  function cb(resolve, reject) {
    return resolve(products)
  }
  const promise = new Promise(cb)
  return promise
}
function find(id) {
  function cb(resolve, reject) {
    return resolve(products.find(element => element === id))
  }
  const promise = new Promise(cb)
  return promise
}
module.exports = { findAll }