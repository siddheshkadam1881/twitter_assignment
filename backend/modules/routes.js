let express = require('express');
let router = express.Router();
let expressValidator = require('express-validator');
router.use(expressValidator());

let userRoutes = require("./usermodule/userroutes");
router.use('/user/', userRoutes);

module.exports = router;
