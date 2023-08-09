const { getProducts, createProduct } = require('../controllers/productController')
const products = require('../data/products')

const headerJson = { 'Content-Type': 'application/json' }

const rutaProductos = (req, res) => {
  if (req.url === '/products') {
    if (req.method === 'GET') {
      res.writeHead(200, headerJson)
      const products = getProducts()
      res.end(JSON.stringify(products))
    } else if (req.method === 'POST') {
      res.writeHead(201, headerJson)
      const products = createProduct(req, res)
      res.end(JSON.stringify(products))
    }
  } else if (req.url.match(/\/api\/products\/\w+/)) {
    const id = req.url.split('/')[3];
    if (req.method === 'GET') {
      res.writeHead(201, headerJson)
      const products = createProduct(req, res, id)
      res.end(JSON.stringify(products))
    } else if (req.method === 'PATCH') {
      res.writeHead(201, headerJson)
      const products = createProduct(req, res, id)
      res.end(JSON.stringify(products))
    } else if (req.method === 'DELETE') {
      res.writeHead(201, headerJson)
      const products = createProduct(req, res, id)
      res.end(JSON.stringify(products))
    }
  }
  else {
    res.writeHead(405, headerJson)
    res.end(JSON.stringify({ 'message': `${req.method} method is not allowed` }))
  }
}

module.exports = rutaProductos