/**
* @author siddheshwar kadam
* @version 1.0
**/
let express = require('express');
let app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var db=require('./config/db');
var routes=require('./modules/routes');
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
   exposedHeaders : ['x-auth-token']
}));
app.use('/api',routes);
app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});
app.use(function (err,req,res,next) {
    logger.error(err.stack);
    res.status(500).send( {
    err: 'something blew up'
  });
})


app.listen(port,function()
{
console.log("we are listening at port "+port);
})
