const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Book = require('./models/book');

const bodyParser= require('body-parser');
// conect to the mongodb
const dbURI='mongodb+srv://cheikh:test1234@books.sfd85.mongodb.net/learnedbook?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));

const book=require('./router/book')

// register view engine
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// listen for request 
// app.listen(3000);

//middleware & static files
app.use(express.static('public'));
// /home page 
app.get('/',(req,res)=>{
    // const book= new Book();
    Book.find()
			.then(result=>{
				res.render('home',{book:result});
			})
			.catch(err=> console.log(err));   
})



// about page 
app.get('/about',(req,res)=>{
    res.render('about');
})

// Book router 
app.use('/book',book);

//redirected link 
app.get('/about-me',(req,res)=>{
    res.redirect('about');
})


