const route = require('express').Router()
const homeControl = require('../controller/home')
const book = require('./book')

route.get('/', homeControl.getHome)
route.use('/book', book)

route.get('/*', homeControl.notFound)

module.exports = routes;