/**
 * Created by chacal on 30/01/17.
 */
var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello from express SON');
});

app.get('/hello', function (req,res) {
    res.json({'message':'Hello from express SON'});
});

app.get('/hello/:name', function (req,res) {
    res.json({'message':'this is my param: ' + req.params.name});
});

app.listen(3001,function () {
    console.log('expressa has started');
});