// Load environment variables from .env file
var dotenv = require('dotenv');
dotenv.load();

var mongoose = require('mongoose');
var Book = require('../models/bookModel');

const fetch = require('node-fetch');


exports.savebook = function (req, res) {

  console.log(" from book controller----------------")


  var books = req.body.book
  console.log(books)

  var query = new Book({
    name: books.name ,
    author: books.author,
    price: books.price 
  }).save(function (err, result) {
    if (err)
      res.send('Error');
    else
      res.send(result);
  });
}




exports.getbook = function (req, res) {
  var ooo = {}
  Book.find(ooo).sort({ createdAt: -1 }).exec(function (err, books) {

    if (err) {
      console.log("========================= Get LiteUser ERROR =========================")
      console.log(err);
      console.log("========================= Get LiteUser ERROR =========================")
      res.json({ "error": "Error encountered. Please try again later" }) // Send an error message to the client indicating an error
    } else {
      console.log("get basic user..........................")
      console.log(books)
      res.send(books);
      console.log("get basic user..........................")
    }
  })
}
