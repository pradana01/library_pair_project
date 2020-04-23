const { Book, Borrower, borrowedBook } = require('../models')

class Control {
    static getList (req, res) {
        Book.findAll()
        .then(data => {
            res.render('bookUser.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static add (req, res) {
        res.render('addBook.ejs')
    }

    static postAdd (req, res) {
        Book.create(req.body)
        .then(data => {
            res.redirect('/books')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete (req, res) {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/books')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static borrow (req, res) {
        let book;
        Book.findAll()
        .then(data => {
            book = data;
            return borrowedBook.findAll()
            .then(data => {
                res.render('borrowBook.ejs', {book, data})
            })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postBorrow (req, res) {
        borrowedBook.create({
            BookId: req.body.id,
            BorrowerId: 1
        })
        .then(data => {
            res.redirect('/books/borrow')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Control