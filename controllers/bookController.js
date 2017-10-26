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
