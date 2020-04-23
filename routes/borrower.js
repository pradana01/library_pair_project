const route = require('express').Router()
const borrower = require('../controllers/borrower')

route.get('/', borrower.getList)

route.get('/borrow', borrower.borrow)
route.post('/borrow', borrower.postBorrow)

module.exports = route