const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// const mongoose = require('mongoose');
// // conect to the mongodb
// const dbURI='mongodb+srv://cheikh:al-Faruq4@books.sfd85.mongodb.net/learnedbook?retryWrites=true&w=majority';

// mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
//     .then((result)=>app.listen(3000))
//     .catch((err)=>console.log(err));
// setting the static middleware for this route 
router.use(express.static('public'));




router.get('/create',(req,res)=>{
    res.render('newbook');
})
router.post('/create',(req,res)=>{
    const book = new Book(req.body);
    console.log(book);
    book.save();
    res.render('home');
})

router.delete('/delete/:del',(req,res)=>{
    Book.remove({_id:req.params.del})
        .then(result=>{
            res.render('home');
        })
        .catch(err=>console.log(err));
})

module.exports=router;