const MongoClient = require("mongodb").MongoClient;

// Connection url
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "assignment4-db";

// Connect using MongoClient
const mongoClient = new MongoClient(url);



const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())


// app.get('/user/id/:id/name/:name', function (req, res) {
//   console.log("Got a GET request for /user:: id="+req.params.id+" name="+req.params.name);
//   res.send("Response to GET request at /user - Received data:: id="+req.params.id+" name="+req.params.name);
// })

// app.get('/user', function (req, res) {
//   console.log("Got a GET request for /user:: header="+req.headers.h2+" - id="+req.query.id+" - name="+req.query.name);
//   res.send("Response to GET request at /user - Received data:: header="+req.headers.h2+" - id="+req.query.id+" - name="+req.query.name);
// })
// app.get('/user1', function (req, res) {
//   console.log("Got a GET request for /user1");
//   res.status(200).json({success:"Success response"});
//   // res.status(200).cookie('test2', 'test222', {expires: new Date(Date.now()+8*36000)}).end();
//   // res.redirect(200, 'https://www.google.com/');
// })

// app.post('/user', function (req, res) {
//   console.log("Got a POST request for /user:: header="+req.headers.h2+" - id="+req.query.id+" - name="+req.query.name);
//   res.send("Response to POST request at /user - Received data:: header="+req.headers.h2+" - id="+req.query.id+" - name="+req.query.name);
// })

// app.post('/user/id/:id/name/:name', function (req, res) {
//   console.log("Got a POST request for /user:: id="+req.params.id+" name="+req.params.name);
//   res.send("Response to POST request at /user - Received data:: id="+req.params.id+" name="+req.params.name);
// })

app.post('/addStudent', function(req, res){
  console.log("Got a POST request for /addStudent:: name="+req.query.name+" rollnum="+req.query.rollnum+" age="+req.query.age);
  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);
    db.collection("CarCollection").insertOne({
      name: req.query.name,
      rollnum: req.query.rollnum,
      age: req.query.age,
  });
  res.send("Response to POST request at /addStudent - Received data:: name="+req.query.name+" rollnum="+req.query.rollnum+" age="+req.query.age);
})
})

app.get('/getStudents', function(req, res){
  mongoClient.connect(function (err, client) {
    const db = client.db(dbName);
  db.collection("CarCollection")
    .find()
    .toArray(function (err, items) {
      if (err) throw err;
      console.log(items);
      res.send(items);
    });
  })
})

// app.put('/user', function (req, res) {
//   console.log("Got a PUT request for /user");
//   res.send('Response to PUT request at /user');
// })

// app.delete('/user', function (req, res) {
//   console.log("Got a DELETE request for /user");
//   res.send('Response to DELETE request at /user');
// })

// app.all('/user', function (req, res) {
//   console.log("Got an ALL request for /user");
//   res.send('Response to ALL request at /user');
// })

// app.use('/image', express.static('img'))

// app.use('/file', express.static('public'))

// msg = ""

// app.use(function(req, res, next) {
//   msg += " - First middleware";
//   next();
// })

// app.use(function(req, res, next) {
//   msg += " - Second middleware";
//   next();
// })

// app.use(function(req, res, next) {
//   msg += " - Third middleware";
//   res.send(msg)
// })

module.exports = app

app.listen(3000, () =>
  console.log('Listening on port 3000'));
