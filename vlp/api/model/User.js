/****************************
@file   : User.js
@author siddheshwar kadam
@version 1.0
*****************************/
 var mongoose = require('mongoose');
 var bcrypt = require('bcrypt');
 const saltRounds = 10;
 //const myPlaintextPassword = 's0/\/\P4$$w0rD';
 var jwt = require('jsonwebtoken');



  var User = new mongoose.Schema({

   first_name:{
     type: String,
     // unique: true,
     default: "",
     trim: true
   },

   last_name: {
    type: String,
    // unique: true,
    default: "",
    trim: true
  },
  userpassword: {
    type: String,
     required: true,
     default: "hello@123"
  },
  Role: {
    type: String,
    // unique: true,
     default: "",
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  fellowship_program: {
    type: String,
    default: ""
  },
  duration: {
   type: String
 },
 start_date: {
   type: Date,
   default: Date.now
 },
 end_date:{
   type: Date,
   default: Date.now
 },
 city: {
    type: String
 },
 company:{
   type: String
 }
 });

 User.statics.register = function (userObj,callback) {
   var user = new this();
   // console.log(roleObj);
   user.Role =  user.Role;
   user.email = userObj.email,
   user.first_name = userObj.first_name,
   user.last_name = userObj.last_name,
   user.fellowship_program= userObj.fellowship_program,
   user.duration=userObj.duration,
   user.city = userObj.city,
   user.company = userObj.company,
   user.start_date = userObj.start_date,
   user.end_date = userObj.end_date,
   user.userpassword = bcrypt.hashSync(userObj.userpassword, 10);
   user.save(callback);
};




 var User = mongoose.model('User', User);
 module.exports = User;
