let express = require('express');
let router = express.Router();
let expressValidator = require('express-validator');
router.use(expressValidator());
let userRoutes = require("./usermodule/userroutes");
let postroutes = require("./postmodule/postroutes");
router.use('/user/', userRoutes);
router.use('/post/', postroutes);


module.exports = router;
