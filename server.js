const http = require('http')
const products = require('./data/products')

const server = http.createServer((req, res) => {
  // console.log('Hello')

  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/html')
  // res.write('<h1>Hola Mundo</h1>')
  // res.end()

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 5001

server.listen(PORT, console.log(`Server running on port ${PORT}`))
