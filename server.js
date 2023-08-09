const http = require('http')
const fs = require('fs')
const { productRoutes } = require('./routes/productRouter')

const server = http.createServer((req, res) => {
  productRoutes(req, res)
})

const PORT = process.env.PORT || 5000

server.listen(PORT, console.log(`Server running on port ${PORT}`))
