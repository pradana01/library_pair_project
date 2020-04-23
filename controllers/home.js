class HomeController {
    static getHome (req, res) {
        res.render('home.ejs')
    }

    static notFound (req, res) {
        const error = 'Sorry, the page that you are looking for is not found'
        res.render('error.ejs', {error})
    }
}

module.exports = HomeController