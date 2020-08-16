var express = require('express');
var router = express.Router();
let UserController = require('./controllers/user.controller');
let userController = new UserController();

router.post('/addUser', userController.addUser)
router.post('/login', userController.login)




module.exports = router;