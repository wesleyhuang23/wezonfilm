angular.module('wezApp').service('filmSvc', function($http){
var films = [

{"Title":"Amanda Knox","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTY5NjE4MTQyNF5BMl5BanBnXkFtZTgwMzg1NjEwMDI@._V1_SX300.jpg",
"link":"js/reviews/amanda-knox-10-20-16.html"},
{"Title":"St. Vincent","Year":"2014",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI5OTA4MF5BMl5BanBnXkFtZTgwNjc4NTM3MjE@._V1_SX300.jpg"},
{"Title":"Come Drink with Me","Year":"1966","Poster":"http://36.media.tumblr.com/589bc5d311d8d3e41587872aaae660a3/tumblr_nfs02fP10c1qimoe7o4_1280.jpg",
"link":"reviews/come-drink-with-me-2016-10-22.html"
},
{"Title":"The Kingdom of Dreams and Madness","Year":"2013",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzkzMzE0OF5BMl5BanBnXkFtZTgwMTY5OTY0MzE@._V1_SX300.jpg"
},
{"Title":"Sully","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_SX300.jpg"
},


];

console.log(films);
  this.getFilm = function(){
    console.log(films);
    return films;
  };

});
