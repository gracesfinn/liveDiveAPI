var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Dive = require('./api/models/diveModel'), 
  bodyParser = require('body-parser');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Divedb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/diveRoutes');
routes(app); 

app.listen(port);

console.log('dive RESTful API server started on: ' + port);