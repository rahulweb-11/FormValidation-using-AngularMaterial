const { Parser } = require('@angular/compiler/src/ml_parser/parser');
var express = require('express');
const bodyParser = require('body-parser');
var userRoute = express.Router();
var mongoose = require('mongoose').Types.mongoose;
var User = require('../models/User');
const { data } = require('jquery');




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
//GET ALL
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
//GET ONE
//userRoute.get("/users/:_id", (req,res)=>{
 // User.findById(req.params._id, function(err, data){
   // if(err)
    //res.send(err);
    //res.json(data)
  //})
//});
//UPDATE 
userRoute.get("/users/:_id", function(req,res){
  var _id = req.params._id;
 /* var CustomerId = req.body.CustomerId;
  var FirstName = req.body.FirstName;
  var LastName = req.body.LastName;
  var PhoneNo = req.body.PhoneNo;
  var EmailId = req.body.EmailId;
  var Address = req.body.Address;
  var PinCode = req.body.PinCode;*/
  console.log("backend",_id);
  User.findById(_id, function(err,data){

   

   /* data.CustomerId = CustomerId?CustomerId:data.CustomerId;
    data.FirstName = FirstName?FirstName:data.FirstName;
    data.LastName = LastName?LastName:data.LastName;
    data.PhoneNo = PhoneNo?PhoneNo:data.PhoneNo;
    data.EmailId = EmailId?EmailId:data.EmailId;
    data.Address = Address?Address:data.Address;
    data.PinCode = PinCode?PinCode:data.PinCode;*/
      
    if(err){  
      res.send(err);  
  }  
  else{                
      res.send(data);  
      }  
  });

});

userRoute.put("/editUsers", function(req,res){

  User.findById(req.body._id, function(err,data){

  /* console.log(data);
    console.log(req.par);
    res.send(data);*/
     
     data.CustomerId = req.body.CustomerId;
     data.FirstName = req.body.FirstName;
     data.LastName = req.body.LastName;
     data.PhoneNo = req.body.PhoneNo;
     data.EmailId = req.body.EmailId;
     data.Address = req.body.Address;
     data.PinCode = req.body.PinCode;
       
     if(err){  
      
       res.send(err);  
   }  
   else{   
    editUser = new User(data)
    editUser.save();
    console.log(editUser);
       //User.save(data)             
       res.send(data);  
       }
   });

});

//CREATE ONE
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



userRoute.delete("/delete/:_id",function(req,res){      
  console.log("backend");
  User.findOneAndRemove({ _id: req.params._id }, function(err,data) {    
   if(err){    
       res.send(err);    
   }    
   else{      
    console.log("backend",req.params);
       // User.save();
          res.send({data:"Record has been Deleted..!!"});               
      }    
   
}); 
});

module.exports = userRoute;