//require
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs") //htm;,ejs,pug

//suppose if our files are save in views -> ejs -> files than we have to define path
// app.set("views",path.resolve(__dirname,"views/ejs"));


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//getting response
app.get('/',(req,res)=>{
    // res.render('index');
    res.render('index');
})

//add user page ejs file
app.get('/add-user',(req,res)=>{
    // res.render('index');
    res.render('add-user');
})

//update user page
app.get('/update-user',(req,res)=>{
    // res.render('index');
    res.render('update-user');
})

//port
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
}) 