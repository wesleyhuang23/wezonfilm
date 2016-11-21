angular.module('wezApp').controller('homeCtrl', function($scope, filmSvc){

$scope.getFilm = function(){
  filmSvc.getFilm().then(function(response){
    $scope.latestFilms = response;
      console.log($scope.latestFilms);
  // var eightFilms = filmSvc.getFilm();
  // var films = [];
  // for(var i = 0; i < 6; i++){
  //   films.push(eightFilms[i]);
  // }
  // $scope.latestFilms = films;
  // console.log($scope.latestFilms);
});
};

$scope.getFilm();

});
