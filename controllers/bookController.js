// Load environment variables from .env file
var dotenv = require('dotenv');
dotenv.load();

var mongoose = require('mongoose');
var Book = require('../models/bookModel');

const fetch = require('node-fetch');


exports.savebook = function (req, res) {
  //var data = req.body.data
  console.log(" from book controller----------------")
  //console.log(req)
  console.log("==============================================")
  console.log(req.body)
  console.log(" from book controller----------------")
  var query = new Book({
    name: "data.sferqerqeq",
    author: "data.authorsfa",
    price: 12 
  }).save(function (err, result) {
    if (err)
      res.send('Error');
    else
      res.send(result);
  });
}
