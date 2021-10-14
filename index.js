var express = require('express');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function (req, res) {
res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="/">Hello there</a>`);
});

app.use('/.well-known/apple-app-site-association', function (req, res) {
	const aasa = path.resolve( __dirname, '..', 'client/apple-app-site-association' )
	res.set('Content-Type', 'application/json')
	res.status(200)
	res.sendFile(aasa)
})

module.exports = app;