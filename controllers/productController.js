const Products = require('../models/productModel')

async function getProducts(req, res) {
  try {
    const products = await Products.findAll()
    console.log(products);
    // const products = dataProducts
    return products
  } catch (e) {
    console.log(e);
  }
}

async function getProductsById(req, res, id) {
  const product = await Products.findById(id)
  return product
}

// @desc   Create a Product
// @route  POST 
async function createProduct(req, res) {
  try {
    const body = await getPostData(req)
    const { name, description, price } = JSON.parse(body)
    const product = { name, description, price }
    const newProduct = await Products.create(product)
    return newProduct
  } catch (error) {
    console.log(error);
  }
}

// @desc   Create a Product
// @route  POST 
async function updateProduct(req, res, id) {
  try {
    const product = await Products.findById(id)
    if (!product) {
      console.log("Error not found on UpdateProduct");
    } else {
      const body = await getPostData(req)
      const { name, description, price } = JSON.parse(body)
      const productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price
      }
      const updatedProduct = await Products.update(id, productData)
      return updatedProduct
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc   Create a Product
// @route  POST 
async function deleteProduct(req, res, id) {
  try {
    const product = await Products.findById(id)
    if (!product) {
      console.log("Error at Delete");
    } else {
      await Products.remove(id)
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct
}
// util
function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = ''

      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = { getProducts, getProductsById }