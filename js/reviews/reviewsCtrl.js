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

  $scope.getTrailer = function(id){
    filmSvc.getTrailer(id).then(function(response){
      console.log(response);
      var result = response.filter(function(response){
        return response.type === 'Trailer';
      });
      console.log(result);
      $scope.trailer = 'https://www.youtube.com/embed/' + result[0].key;
      console.log($scope.trailer);
    });
  };

  $scope.getFilmDetails(id);

  $scope.getTrailer(id);

});
