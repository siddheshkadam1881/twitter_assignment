var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//establish connection

var db = 'mongodb://localhost/VLP';
 // 'secret': 'todoapp'
//connect to the database
module.exports = function () {
mongoose.connect(db);
};



























































// 'use strict;'
// //Include crypto to generate the movie id
// var crypto = require('crypto');
//
// module.exports = function() {
// 	return {
// 		userList : [],
// 		/*
// 		 * Save the movie inside the "db".
// 		 */
// 		register(user) {
//       console.log("white")
// 			user.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
// 			this.userList.push(user);
// 			return 1;
// 		}
//   }
// };
