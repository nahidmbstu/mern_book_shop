var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

var BookSchema = new Schema({
    name:{ type: String, unique: false},
    author:{ type: String, unique: false},
    price: Number
   
    
  }, schemaOptions);

  var Book = mongoose.model('Book', BookSchema);
  
  module.exports = Book;