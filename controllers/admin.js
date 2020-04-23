const { Book } = require('../models');
const stockSum = require('../helpers/stockSum')

class AdminController {
    static showBooks(req, res){
        Book.findAll({
            order: [
                ['title', 'asc']
            ]   
        })
        .then(data => {
            res.render('book-list', {books: data, stockSum})
        })
        .catch(err => {
            res.render('error', {error: err})
        })
    }

    static showAddBookForm (req, res) {
        res.render('add-book-form')
    }

    static addBookProcess (req, res) {
        Book.create({ 
            title: req.body.title, 
            stock: req.body.stock
        })
        .then(() => {
            res.redirect('/admin')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static showEditBookForm (req, res) {
        Book.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.render('edit-book-form', { data })
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static editBookProcess (req, res) {
        Book.update(
            {
                title: req.body.title, 
                stock: req.body.stock
            }, 
            {
                where: {
                    id: req.params.id
                }
            }
        )
        .then(() => {
            res.redirect('/admin')
        })
        .catch((err) => {
            res.send(err)
        })
    }

    static deleteBook (req, res) {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin')
        })
        .catch((err) => {
            res.send(err)
        })
    }
}

module.exports = AdminController