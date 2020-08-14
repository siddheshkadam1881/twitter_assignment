/******************************************************************************
 *  Purpose         : Defines Logger for tracing the execution details of the application.
 *
 *  @description
 *
 *  @file           : logger.js
 *  @overview       : logger will log all the details regarding execution of the application.
 *  @version        : 1.0
 *  @since          : 18-05-2018
 *
 ******************************************************************************/

 /**
 * @description Dependencies require to be installed before the execution of this file.
 * @var {Class} winston class instance of the winston
 */
var winston = require('winston');
winston.emitErrs=true;

var logger = new (winston.Logger)({
  transports: [
            new (winston.transports.File)({
                name: 'file.info',
                filename: '../log/info.log',
                level: 'info'
            }),
            new (winston.transports.File)({
                name: 'file.error',
                filename: '../log/error.log',
                level: 'error'
            })
        ],
  exceptionHandlers: [
    new (winston.transports.Console)({ json: false, timestamp: true }),
    new winston.transports.File({ filename: __dirname + '/exceptions.log', json: false })
  ],
  exitOnError: false
});
module.exports = logger;
























// var winston = require( 'winston' );
// winston.emitErrs=true;
//
// var logger = new( winston.Logger )( {
// 	transports: [
// 		new winston.transports.Console({
// 			level: 'debug',
//       handleExceptions:true,
//       json:false,
//       colorize:true
// 		  }),
// 		//   new winston.transports.Loggly({
// 		// 	level: 'error',
// 		// 	filename: './log1/error-log',
//     //   handleExceptions:true,
//     //   json:false,
//     //   colorize:true
// 		// }),
// 		new winston.transports.File( {
//     level: 'error',
//     filename: './log1/all-log',
//     handleExceptions:true,
//     json:false,
//     colorize:true,
// 		maxsize: 1024 * 1024 * 10 // 10MB
// 		})
//     ],
// 	   exitOnError:false
// 		})
//     module.exports=logger;
// //
