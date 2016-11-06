angular.module('wezApp').controller('homeCtrl', function($scope, filmSvc){

$scope.getFilm = function(){
  var eightFilms = filmSvc.getFilm();
  var films = [];
  for(var i = 0; i < 6; i++){
    films.push(eightFilms[i]);
  }
  $scope.latestFilms = films;
  console.log($scope.latestFilms);
};

$scope.getFilm();

});
