angular.module('wezApp').controller('filmCtrl', function($scope, filmSvc){

$scope.getFilm = function(){
  $scope.films = filmSvc.getFilm();
  console.log($scope.films);
};

$scope.getFilm();



});
