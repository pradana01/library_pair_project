const { Borrower, Admin } = require('../models');

class HomeController {
    static getHome (req, res) {
        res.render('home.ejs')
    }

    static notFound (req, res) {
        const err = 'Sorry, the page that you are looking for is not found'
        res.render('error.ejs', {err})
    }

    static showSignUpBorrower (req, res) {
        res.render('sign-up-borrower')
    }

    static signUpProcess (req, res) {
        Borrower.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(
            res.redirect('/signin?msg=1')
        )
        .catch((err) => {
            res.redirect('/masuk')
        })
    }

    static showSignInBorrower (req, res) {
        let msg = req.query
        res.render('sign-in-borrower', {msg})
    }

    static signInProcess (req, res) {
        Borrower.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            if(!data || !(bcrypt.compareSync(req.body.password, data.password))){
                res.redirect('/signin?msg=2')
            }else{
                req.session.userId = data.id
                req.session.role = 'borrower'
                res.redirect('/borrower')
            }
        })
    }

    static showSignInAdmin (req, res) {
        let msg = req.query
        res.render('sign-in-admin', {msg})
    }

    static signInAdminProcess (req, res) {
        Admin.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            if(!data || req.body.password !== data.password){
                res.redirect('/signin?msg=2')
            }else{
                req.session.userId = data.id
                req.session.role = 'admin'
                res.redirect('/admin')
            }
        })
    }

    static signOut (req, res) {
        req.session.destroy()
        res.redirect('/')
    }

}

module.exports = HomeController