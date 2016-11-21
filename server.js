var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postges://wesleyhuang@localhost/wezonfilm';

var app = module.exports = express();
app.use(bodyParser.json());
var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);
var db = app.get('db');
var controller = require('./controller.js');

db.create_films(function(err, films){
  console.log(err);
  console.log('films table init');
});


app.listen(3000, function(){
  console.log('listening on port 3000...');
});
