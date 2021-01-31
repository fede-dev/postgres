const express = require('express')
const productosRouter = require('./producto.routes')
const routes = express.Router()
routes.use('/productos', productosRouter)

module.exports = routes