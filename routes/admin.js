const router = require('express').Router()
const admin = require('../controllers/admin')

function isLoginAsAdmin(req, res, next) {
    if(req.session.userId && req.session.isAdmin){
        next()
    }else{
        res.redirect('/unauthorized')
    }
}

router.use(isLoginAsAdmin)

router.get('/', admin.showBooks)

router.get('/add', admin.showAddBookForm)
router.post('/add', admin.addBookProcess)

router.get('/edit/:id', admin.showEditBookForm)
router.post('/edit/:id', admin.editBookProcess)

router.get('/delete/:id', admin.deleteBook)

module.exports = router