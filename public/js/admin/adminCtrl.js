angular.module('wezApp').controller('adminCtrl', function($scope, filmSvc){

    $scope.getMovies = function(term){
        console.log(term);
        filmSvc.getMovies(term).then(function(response){
            $scope.movies = response;
            console.log('scope.movies', $scope.movies);
        });
    }
    $scope.getFavs = function(fav){
        console.log(fav);
        var term = fav;
        filmSvc.getMovies(term).then(function(response){
            $scope.favorites = response;
        });
    }
    

});