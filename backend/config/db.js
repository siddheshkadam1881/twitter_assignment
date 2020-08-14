var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/twitter';
mongoose.connect(mongoDB, { useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


























































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
