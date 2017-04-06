var express = require('express');
var fs = require('fs');

var app = express();

var file1 = fs.readFileSync(__dirname + '/index.htm', 'utf8');
var file2 = fs.readFileSync(__dirname + '/another.htm', 'utf8');

var port = process.env.PORT || 3000;

app.use('/pic',express.static(__dirname+'/public'));

app.get('/', function(req, res) {
	res.send(file1);
});

app.get('/another', function(req, res) {
	res.send(file2);
});

app.get('*', function(req, res) {
	res.send('<html><head><title>404</title></head><body><h1>404 ERROR!</h1></body></html>');
});

app.listen(port);