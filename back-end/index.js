var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var config = require('./config');

var app = express();
var server = http.createServer(app);

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//database
var mongoDb = mongoose.connect(config.database).connection;

mongoDb.on('connected', function(){
    console.log('mongo connected');
});

mongoDb.on('error', function(){
   console.log('error mongo');
});

//add routes
require('./routes')(app);


server.listen(3000);