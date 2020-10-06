const express = require("express");
const bodyParser = require('body-parser');
const mongooseClient = require('mongoose');

var user = require('../Backend/Routes/user');
const { send } = require('process');

var app = express();

const db = mongooseClient.connect("mongodb://localhost:27017/FreshMartCoop", function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log("connected to mongodb server"+ db + "," + data );
    }
});

app.get("/api/test", (req,res)=>{
    res.send("Hello world");
});

app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
  }); 
  

app.use("/api", user);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  

 

module.exports = app;