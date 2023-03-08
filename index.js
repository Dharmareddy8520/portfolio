const express=require('express')
const app=express()
const bodyParser = require('body-parser');
const session = require('express-session');
const ejs=require("ejs");
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.render('index')
})


const port = process.env.PORT || 3000;
app.listen(port,function(req,res){
    console.log("server started")
})