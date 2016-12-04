var express = require("express");
var app = express();
var path = require("path");

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
    res.render('index.ejs');
})

app.listen(3000, function () {
    console.log("Running at port 3000");
})