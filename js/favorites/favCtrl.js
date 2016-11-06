angular.module('wezApp').controller('favCtrl', function($scope, filmSvc){
  $scope.getFavs = function(){
    $scope.favorites = filmSvc.getFavs();
    console.log($scope.favorites);
  };

  $scope.getFavs();
});
