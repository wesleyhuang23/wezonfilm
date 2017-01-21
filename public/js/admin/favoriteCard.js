angular.module('favoriteCardDirective', []).directive('favoriteCard', function(){
    return {
        restrict: 'E',
        scope: {
            favorite: '='
        },
        templateUrl: './js/admin/favoriteCard.html',
        controller: function($scope, filmSvc){
            console.log($scope.favorite);
        $scope.addToFav = function(favorite){
                console.log('film', favorite);
                filmSvc.addToFav(favorite).then(function(response){
                    console.log('added to favorites');
                });
            }
        }
    }
})