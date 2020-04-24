const { Book, Borrower, borrowedBook } = require('../models');
const nodemailer = require("nodemailer");


class BorrowerController {
    static showDashboard (req, res) {
        let borrower, books
        Borrower.findOne({
            where: {
                id: req.session.userId
            },
            include: [Book, borrowedBook]
        })
        .then(data => {
            borrower = data
            return Book.findAll({
                order: [
                    ['title', 'ASC']
                ]
            })
        })
        .then(data => {
            books = data
            res.render('dashboard', {borrower, books})
            // res.send({borrower, books})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static borrow (req, res) {
        Book.increment('stock', { by: -1, where: { id: req.body.id }})
        .then(() => {
            return borrowedBook.create({
                BookId: req.body.id, 
                BorrowerId: req.session.userId
            })
        })
        .then(
            res.redirect('/borrower')
        )
        .catch(err => {
            res.send(err)
        })
    }

    static return (req, res) {
        Book.increment('stock', { by: 1, where: { id: req.params.id }})
        .then(() => {
            return borrowedBook.destroy({
                where: {
                  id: req.params.id1
                }
              })
        })
        .then(
            res.redirect('/borrower')
        )
        .catch(err => {
            res.send(err)
        })
    }
    static getNotif (req, res) {
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andreanwirapradana@gmail.com',
                pass: '4n4ndy4w1r4'
            }
        })
        
        var mailOptions = {
            from: 'andreanwirapradana@gmail.com',
            to: req.session.email,
            subject: 'Library App Notification',
            text: `Ini adalah email notifikasi mengenai peminjaman buku anda. Deadline pengembalian buku adalah 14 hari terhitung dari hari buku dipinjam.`
        }
        
        transport.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log('Email sent: ' + info.response)
            }
        })
        res.redirect('/borrower')
    }
}

module.exports = BorrowerController