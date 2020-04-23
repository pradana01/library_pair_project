const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home')

route.get('/', HomeController.getHome)

route.get('/*', HomeController.notFound)

module.exports = router