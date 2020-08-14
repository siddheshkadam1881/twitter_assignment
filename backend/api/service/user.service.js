

var UserModel = require("./model/User");
var jwt = require('jsonwebtoken');

function User(){
}


User.prototype.register = function (userObj,callback) {
  console.log(userObj);
  UserModel.register(userObj,callback);
};


module.exports = new User();
