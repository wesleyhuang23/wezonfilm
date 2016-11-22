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

  $scope.getFilmReview = function(id){
    filmSvc.getFilmReview(id).then(function(response){
      $scope.review = response[0];
      console.log($scope.review);
    });
  };

  $scope.getTrailer = function(id){
    filmSvc.getTrailer(id).then(function(response){
      console.log(response);
      var result = response.filter(function(response){
        return (response.type === 'Trailer' && response.name !== 'TV Spot') && (response.name !== 'Fan-made Trailer' && response.name !== 'VHS Trailer' && response.key !== 'pn1cbmFNjAM' && response.name !== 'Trailer 1') || response.key === 'kfIY0fNIJ3c';
      });
      console.log(result);
      $scope.trailer = 'https://www.youtube.com/embed/' + result[0].key;
      console.log($scope.trailer);
    });
  };

  $scope.getFilmDetails(id);

  $scope.getTrailer(id);

  $scope.getFilmReview(id);
});
