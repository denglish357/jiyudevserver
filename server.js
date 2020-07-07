const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')
const {
    getClient
} = require('./db')
const app = express()
app.use(bodyParser.json())
app.use(cors())
const objectId = require('mongodb').ObjectId;

app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
