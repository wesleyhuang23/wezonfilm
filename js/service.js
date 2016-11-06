angular.module('wezApp').service('filmSvc', function($http){
var films = [

{"Title":"Billy Lynn's Long Halftime Walk","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NDI1Nzg4OF5BMl5BanBnXkFtZTgwNjYxOTg4ODE@._V1_SX300.jpg",
"link":""
},
{"Title":"Doctor Strange","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_SX300.jpg",
"link":""
},
{"Title":"Hacksaw Ridge","Year":"2016","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_SX300.jpg",
"link":""
},
{"Title":"Amanda Knox","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNTY5NjE4MTQyNF5BMl5BanBnXkFtZTgwMzg1NjEwMDI@._V1_SX300.jpg",
"link":"js/reviews/amanda-knox-review.html"
},
{"Title":"St. Vincent","Year":"2014",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk5NzI5OTA4MF5BMl5BanBnXkFtZTgwNjc4NTM3MjE@._V1_SX300.jpg",
"link":""
},
{"Title":"Come Drink with Me","Year":"1966","Poster":"http://36.media.tumblr.com/589bc5d311d8d3e41587872aaae660a3/tumblr_nfs02fP10c1qimoe7o4_1280.jpg",
"link":"js/reviews/come-drink-with-me-2016-10-22.html"
},
{"Title":"The Kingdom of Dreams and Madness","Year":"2013",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NzkzMzE0OF5BMl5BanBnXkFtZTgwMTY5OTY0MzE@._V1_SX300.jpg",
"link":""
},
{"Title":"Sully","Year":"2016",
"Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5NTUwNDIyOV5BMl5BanBnXkFtZTgwMjI2OTc3OTE@._V1_SX300.jpg",
"link":""
},


];

var favorites =
[
  {"Title":"Mountains May Depart","Year":"2015",
  "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNjgyMjk1OV5BMl5BanBnXkFtZTgwMzgzNDc5NzE@._V1_SX300.jpg"
},
  {"Title":"Naked Youth","Year":"1960","Poster":"https://image.tmdb.org/t/p/w1280/itF3KhmSogKbzJ8Jvp8OtBxEfS9.jpg","imdbID":"tt0054286"}
];

this.getFavs = function(){
  return favorites;
};

console.log(films);
  this.getFilm = function(){
    console.log(films);
    return films;
  };

});
