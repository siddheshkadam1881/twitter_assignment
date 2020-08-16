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
var path = require('path');
var port = process.env.PORT || 3000;
const fileUpload = require('express-fileupload');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cors({
   exposedHeaders : ['x-auth-token']
}));
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  useTempFiles: true,
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
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
