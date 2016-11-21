angular.module('wezApp').controller('filmCtrl', function($scope, filmSvc){

$scope.getFilm = function(){
  filmSvc.getLibrary().then(function(response){
    $scope.films = response;
      console.log($scope.films);
  });
};

$scope.getFilm();



});
