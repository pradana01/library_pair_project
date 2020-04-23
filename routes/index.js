const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home')

router.get('/', HomeController.getHome)

router.get('/*', HomeController.notFound)

module.exports = router