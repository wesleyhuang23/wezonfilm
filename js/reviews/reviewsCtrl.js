angular.module('wezApp').controller('reviewsCtrl', function($scope, filmSvc, $stateParams, $sce){
  console.log('reviewsCtrl reached');
  console.log($stateParams.id);
  var id  = $stateParams.id;

  $scope.trustSrc = function(link) {
  return $sce.trustAsResourceUrl(link);
};

  $scope.getFilmDetails = function(id){
    filmSvc.getFilmDetails(id).then(function(response){
      $scope.filmDetail = response;
      console.log($scope.filmDetail);
    });
  };

  $scope.getFilmDetails(id);

});
