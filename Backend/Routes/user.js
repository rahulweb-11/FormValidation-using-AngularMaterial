const { Parser } = require('@angular/compiler/src/ml_parser/parser');
var express = require('express');
const bodyParser = require('body-parser');
var userRoute = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User');




userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({extended:true}));


userRoute.get("/user",function(req,res){  
  model.find({CustomerId: req.body.CustomerId},function(err,data){  
            if(err){  
                res.send(err);  
            }  
            else{                
                res.send(data);  
                }  
        });  
});

userRoute.get("/users",function(req,res){
  User.find({},function(err,data){
    if(err){  
      res.send(err);  
  }  
  else{                
      res.send(data);  
      }  
  });
})

userRoute.get("/test1", function(req,res){
  res.send("coming from user route");
});

userRoute.post("/postUser",function(req,res){
  

  const userData = {
    "CustomerId": req.body.CustomerId,
    "FirstName": req.body.FirstName,
    "LastName": req.body.LastName,
    "PhoneNo": req.body.PhoneNo,
    "EmailId": req.body.EmailId,
    "Address": req.body.Address,
    "PinCode": req.body.PinCode
  };
 // res.send(userData);
//res.send(req.body);
//res.send("Hello world");  
User.create(userData,function(err,data){
  if(err){
    res.send(err);
  }else{
    res.send(data);
    User.save();
  }
});
});



userRoute.delete("/api/deleteUser",function(req,res){      
  model.remove({ _id: req.body.id }, function(err) {    
   if(err){    
       res.send(err);    
   }    
   else{      
          res.send({data:"Record has been Deleted..!!"});               
      }    
}); 
});

module.exports = userRoute;