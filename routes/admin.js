const route = require('express').Router()
const admin = require('../controllers/admin')

route.get('/', admin.showBooks)

route.get('/add', admin.showAddBookForm)
route.post('/add', admin.addBookProcess)

route.get('/edit/:id', admin.showEditBookProcess)
route.post('/edit/:id', admin.showEditBookProcess)

route.get('/delete/:id', admin.deleteBook)

module.exports = route