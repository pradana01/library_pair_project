const router = require('express').Router()
const BorrowerController = require('../controllers/borrower')

function isLoginAsBorrower(req, res, next) {
    if(req.session.userId && req.session.isAdmin === false){
        next()
    }else{
        res.redirect('/unauthorized')
    }
}

router.use(isLoginAsBorrower)

router.get('/', BorrowerController.showDashboard)

router.post('/borrow', BorrowerController.borrow)
router.get('/return/:id/:id1', BorrowerController.return)
router.get('/getNotif', BorrowerController.getNotif)

module.exports = router