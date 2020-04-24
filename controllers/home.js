const { Borrower, Admin } = require('../models');
const bcrypt = require('bcryptjs')

class HomeController {
    static getHome (req, res) {
        res.render('home.ejs')
    }

    static notFound (req, res) {
        const err = 'Sorry, the page that you are looking for is not found'
        res.render('error.ejs', {err})
    }

    static unauthorized (req, res) {
        const err = 'Sorry, you are not allowed to access this page'
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
                req.session.email = data.email
                req.session.username = data.name
                req.session.isAdmin = false
                res.redirect('/borrower')
            }
        })
        .catch(err => {
            res.send(err)
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
                req.session.username = 'Admin'
                req.session.isAdmin = true
                res.redirect('/admin')
            }
        })
        .catch(err => {
            res.send(err)
        })
    }

    static signOut (req, res) {
        req.session.destroy()
        res.redirect('/')
    }

}

module.exports = HomeController