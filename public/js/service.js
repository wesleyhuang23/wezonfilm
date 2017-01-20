angular.module('wezApp').service('filmSvc', function($http, $stateParams){

this.getFavs = function(){
  console.log('favorites node reached');
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/favorites'
  }).then(function(response){
    console.log(response.data);
    return response.data;
  });
};

this.getFilm = function(){
    console.log('local get request reached');
    return $http({
      method: 'GET',
      url: '/latest'
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

this.getLibrary = function(){
  console.log('local library reached');
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/library'
  }).then(function(response){
    console.log(response.data);
    return response.data;
  });
};

this.getNewFav = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:3000/favorites'
  }).then(function(response){
    console.log(response.data);
    return response.data;
  })
}

this.getNewFav_detail = function(newFavId){
  console.log(newFavId);
  return $http({
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + newFavId + '?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US&append_to_response=undefined'
  }).then(function(response){
    console.log(response.data);
    return response.data;
  })
}

  this.getTrailer = function(id){
    console.log('reached service');
    return $http({
      method:'GET',
      url: 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=8eecf03080f34edf303e14b5f1476653&language=en-US'
    }).then(function(response){
      console.log(response.data.results);
      var trailers = response.data.results;
      var results = trailers.filter(function(trailers){
        return trailers.name === 'The Birdcage (1996)' || trailers.key === 'kCFaTffMMeE'|| trailers.key === 'PIuN3gfyGcY' || trailers.key === '9r8LG_lCbac'|| (trailers.name.includes('Trailer') && trailers.type === 'Trailer') || trailers.type === 'Trailer';
      });
      console.log(results);
      return results;
    });
  };

  this.getFilmReview = function(id){
    console.log('getFilmReview service.js');
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/' + id
    }).then(function(response){
      console.log(response.data);
      return response.data;
    });
  };

  this.getFilmDetails = function(id){
    console.log(id);
    console.log('reached service');
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=' + id + '&plot=short&r=json'
    }).then(function(response){
      console.log('reached service.js');
      console.log(response);
      var info = {};
      console.log(response.data.Title);
      info.title = response.data.Title;
      info.year = response.data.Year;
      info.genre = response.data.Genre;
      info.poster = response.data.Poster;
      info.actors = response.data.Actors;
      info.director = response.data.Director;
      info.runtime = response.data.Runtime;
      info.writer = response.data.Writer;
      info.language = response.data.Language;
      info.country = response.data.Country;
      info.release = response.data.Released;
      info.plot = response.data.Plot;
      return info;
    });

  };
  this.getMovies = function(term){
    console.log('service term', term);
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + term
    }).then(function(response){
      return response.data.Search;
    });
  }

  //DATABASE STUFF
  this.addToLibrary = function(film){
    return $http({
      method: 'POST',
      url: '/library',
      data: film
    }).then(function(response){
      return response;
    });
  }

});
