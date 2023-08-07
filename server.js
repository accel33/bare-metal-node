const http = require('http')
const fs = require('fs')
const rutaProductos = require('./routes/productRouter')

const server = http.createServer((req, res) => {
  rutaProductos(req, res)
})

const PORT = process.env.PORT || 5003

server.listen(PORT, console.log(`Server running on port ${PORT}`))
