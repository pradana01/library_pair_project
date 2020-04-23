const express = require('express')
const app = express()
// const session = require('express-session')
const port = 3001
const router = require('./routes')

app.set('view engine', 'ejs')
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure:false}
// }))
app.use(express.urlencoded({extended: true}))


app.use(router)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})