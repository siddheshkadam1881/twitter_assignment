var express = require('express');
var router = express.Router();
let UserController = require('./controllers/user.controller');
let userController = new UserController();



router.post('/addUser', userController.addUser)




module.exports = router;