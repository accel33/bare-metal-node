const products = require('../data/products')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs');
const { join } = require('path');

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

function create(product) {
  const cb = (resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product }
    products.push(newProduct)
    fs.writeFileSync('../data/products.json', JSON.stringify(newProduct), 'utf8', (err) => {
      if (err) console.log(err)
    })
    resolve(newProduct)
  }
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex(p => p.id === id)
    products[index] = { id, ...product }
    resolve(products[index])
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    products = products.filter(p => p.id !== id)
    resolve()
  })
}

module.exports = { findAll, findById, create, update, remove }