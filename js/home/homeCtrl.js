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

var newFavId;

$scope.getNewFav = function(){
  filmSvc.getNewFav().then(function(response){
    newFavId = response[0].imdbid;
    console.log(newFavId);
    $scope.getNewFav_detail(newFavId);
  });
}

$scope.getNewFav_detail = function(newFavId){
  console.log(newFavId);
  filmSvc.getNewFav_detail(newFavId).then(function(response){
    $scope.newFav_detail = response;
    console.log($scope.newFav_detail);
  });
}

$scope.getFilm();
$scope.getNewFav();


});
