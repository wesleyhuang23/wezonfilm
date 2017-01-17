angular.module('wezApp').controller('adminCtrl', function($scope, filmSvc){

    $scope.getMovies = function(term){
        console.log(term);
        filmSvc.getMovies(term).then(function(response){
            $scope.movies = response;
            console.log('scope.movies', $scope.movies);
        });
    }

});