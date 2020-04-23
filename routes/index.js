const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home')
const book = require('./book')


router.get('/', HomeController.getHome)
router.use('/books', book)

router.get('/*', HomeController.notFound)

module.exports = router