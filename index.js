var express = require("express");
var app = express();
var path = require("path");
var SolrNode = require("solr-node"); // https://www.npmjs.com/package/solr-node

var client = new SolrNode({
    host: '192.168.171.201',
    port: '8989',
    core: 'CE_OSM',
    protocol: 'http'
})

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