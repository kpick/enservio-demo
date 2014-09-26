#!/usr/bin/env node

// -------------------------------------
// Libraries
// -------------------------------------

var restify = require('restify');
var mongojs = require("mongojs");

// -------------------------------------
// Init
// -------------------------------------

// Mongo set-up
var addr = '127.0.0.1';
var databaseUrl = addr + ':27017/openiou';
var collections = ["queues"]
var db = mongojs.connect(databaseUrl, collections);

// Create REST Server
var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.fullResponse());

// REST Paths
server.get('/echo/:name', echo);
server.get('/queues', getAllQueues);
server.post('/queue/save', saveQueue);

// -------------------------------------
// REST Functions
// -------------------------------------

// DEBUG Response to test server pathway
function echo(req, res, next) {
  res.send('echo ' + req.params.name);
  next();
}

function getAllQueues(req, res, next)  {
    console.log("PING");
    db.queues.find().limit(100).toArray(function(err, results){
       res.send(results);
    });
    next();
}

function saveQueue(req, res, next)  {
    var postContent = req.body;
    db.queues.save(postContent, function(err, saved) {
        if( err || !saved ) {
                console.log("Data not saved");
                console.log(err);
            }
            else console.log("Data saved");
        });
    res.send();
}


// -------------------------------------
// Start the Server
// -------------------------------------

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});