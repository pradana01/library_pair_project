const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const router = require('./routes')
app.use(router)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})