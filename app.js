const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

const router = require('./routes')
app.use(router)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})