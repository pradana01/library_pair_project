class Control {
    static getHome (req, res) {
        res.render('home.ejs')
    }

    static notFound (req, res) {
        res.send('sorry, the page that you are looking for is currently under maintenance.')
    }
}

module.exports = Control