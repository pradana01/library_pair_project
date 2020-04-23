const route = require('express').Router()
const book = require('../controllers/book')

route.get('/', book.getList)
route.get('/add', book.add)
route.post('/add', book.postAdd)
route.get('/borrow', book.borrow)
route.post('/borrow', book.postBorrow)

module.exports = route