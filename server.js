var express = require('express');
var app = express();
var cors = require('cors');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
