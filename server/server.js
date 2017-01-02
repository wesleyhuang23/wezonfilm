var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://wesleyhuang@localhost/wezonfilm';

var massiveInstance = massive.connectSync({connectionString : connectionString});
var app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));


app.set('db', massiveInstance);
var db = app.get('db');
var controller = require('./controller.js');

db.create_films(function(err, films){
  console.log('films table init');
});

db.create_favorites(function(err, films){
  console.log('favs table init');
});
db.create_reviews(function(err, reviews){
  console.log('reviews table init');
});

app.get('/', controller.get_films);
app.get('/library', controller.get_library);
app.get('/favorites', controller.get_favorites);
app.get('/:imdbid', controller.get_review);

app.listen(3000, function(){
  console.log('listening on port 3000...');
});
