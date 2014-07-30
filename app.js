var express = require("express");
var logfmt = require("logfmt");
var app = express();

var gingerbread = require('gingerbread');

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {


	gingerbread('The smelt of fliwers bring back memories.', function(error, text, result, corrections) {

		res.send(corrections);

	});


});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});