const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home')
const admin = require('./admin')
const borrower = require('./borrower')

function isLogin(req, res, next) {
    if(req.session.userId){
        next()
    }else{
        res.redirect('/')
    }
}

function isBorrower(req, res, next){
    if(req.session.role === 'borrower'){
        next()
    }else{
        res.render('error')
    }
}

function isAdmin(req, res, next){
    if(req.session.role === 'admin'){
        next()
    }else{
        res.render('error')
    }
}


router.get('/', HomeController.getHome)

router.get('/signup', HomeController.showSignUpBorrower)
router.post('/signup', HomeController.signUpProcess)

router.get('/signin', HomeController.showSignInBorrower)
router.post('/signin', HomeController.signInProcess)

router.get('/signin-admin', HomeController.showSignInAdmin)
router.post('/signin-admin', HomeController.signInAdminProcess)

router.get('/signout', HomeController.signOut)

router.use('/admin', admin)
router.use('/borrower', borrower)

router.get('/*', HomeController.notFound)

module.exports = router