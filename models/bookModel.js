var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

var BookSchema = new Schema({
    name:String, 
    author:String, 
    price: Number
    
  }, schemaOptions);

  var Book = mongoose.model('Book', BookSchema);
  
  module.exports = Book;