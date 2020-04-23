const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home')
const book = require('./book')
const bcrypt = require('bcryptjs')


function login (req, res, next) {
    req.session.userId = 1
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync('ceritanya password', salt)
    req.hashedPassword = hash
    next()
}

function checkSession (req, res, next) {
    if (req.session.userId == 1) {
        next()
    }
    else{
        res.send('you are not authorized')
    }
}


router.get('/', HomeController.getHome)

router.get('/login', login, function(req, res) {
    res.send('you are logged in' + req.hashedPassword)
})

router.use(checkSession)
router.use('/books', book)


router.get('/*', HomeController.notFound)

module.exports = router