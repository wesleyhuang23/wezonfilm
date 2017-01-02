angular.module('wezApp').controller('favCtrl', function($scope, filmSvc, $stateParams){
  $scope.getFavs = function(){
    filmSvc.getFavs().then(function(response){
      $scope.favorites = response;
    });
    console.log($scope.favorites);
  };

  $scope.getFavs();


});
