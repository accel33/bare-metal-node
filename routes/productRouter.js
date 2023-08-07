const { getProducts } = require('../controllers/productController')
const products = require('../data/products')

const headerJson = { 'Content-Type': 'application/json' }
const rutaProductos = (req, res) => {
  if (req.url === '/products' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const products = getProducts()
    res.end(JSON.stringify(products))
  }
  //  else if (req.url === '/productos/1' && req.method === "GET") {
  //   let id = req.url.split('/').pop()
  //   res.writeHead(200, headerJson)
  //   const products = getProductsById(id)
  // }
  else {
    res.writeHead(500, headerJson)
    res.end('Error')
  }
}

module.exports = rutaProductos