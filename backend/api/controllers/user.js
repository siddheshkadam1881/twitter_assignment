/******************************************************************************
*  Purpose         : Rest api of user here..
*
*  @description
*
*  @file           : user.js
*  @overview       : rest api of user write here..
*  @author         : siddheshwar kadam
*  @version        : 1.0
*  @since          : 06-08-2017
*******************************************************************************/

'use strict';
 // Include our "db"
 var db = require('../../config/db')();
 var User = require("../model/User");

 module.exports = { register };


 /**
  * @description Class register registering user here
  * @class createNote
  * @extends {req, res}
  */
//('password', 'passwords must be at least 5 chars long and contain one number')
    // .isLength({ min: 5 })

 	function register(req, res)
  {
      try
     {
       req.checkBody("first_name", "Enter your first name please").notEmpty();
       req.checkBody("last_name", "Enter your last_name").notEmpty();
       req.checkBody("email", "Enter your email please").isEmail();
       req.checkBody("Role","Enter your role here").notEmpty();
       req.checkBody("start_date","Enter your role here").notEmpty();
       req.checkBody("end_date","Enter your role here").notEmpty();
       req.checkBody("company","Enter your role here").notEmpty();
       req.checkBody("city","Enter your role here").notEmpty();
       req.checkBody('userpassword', 'passwords must be at least 5 chars long').isLength({ min: 5 })

       var errors = req.validationErrors();
       if (errors)
       {
         res.send(errors);
         return;
       }
       else
       {
         userService.registerUser(req.body, function(err, user) {
         if (err)
         return next(err);
         res.status(200).json(user);
         });
       }
    }
     catch (err) {
              return next(err);
          }
  }

  // {
  //   console.log("yellow")
 	// 	res.json({success: db.register(req.body), description: "user is  added to the list!"});
 	// }
