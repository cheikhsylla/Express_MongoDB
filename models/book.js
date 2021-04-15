const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookschema = new Schema({
    author :{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    finished:{
        type:String,
        required:true
    }
},{timestamps:true});

const Book = mongoose.model('MyBook',bookschema);

module.exports=Book;