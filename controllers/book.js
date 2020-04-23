const { Book, Borrower, borrowedBook } = require('../models')
const subStock = require('../helper/substractStock')

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
        let borrower;
        Book.findAll()
        .then(data => {
            book = data;
            return Borrower.findAll({where: {
                id: 2
            }})
            .then(data => {
                borrower = data
                // console.log(borrower)
                return borrowedBook.findAll()
                .then(data => {
                    res.render('borrowBook.ejs', {book, borrower, data})
                })
            })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static postBorrow (req, res) {

        let bookId;
        // console.log(req.body)
        borrowedBook.create(req.body)
        .then(data => {
            bookId = data.dataValues.BookId
            // console.log(bookId)
            return Book.findAll({
                where: {
                    id: bookId
                }
            })
            .then(data => {
                console.log(data[0].dataValues)
                return Book.update({
                    stock: subStock(data[0].dataValues.stock)
                }, {
                    where: {
                        id: data[0].dataValues.id
                    }
                })
                .then(data => {
                    // console.log(data)
                    res.redirect('/books/borrow')
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = Control