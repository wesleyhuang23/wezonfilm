angular.module('favoriteCardDirective', []).directive('favoriteCard', function(){
    return {
        restrict: 'E',
        scope: {
            favorite: '='
        },
        templateUrl: './js/admin/favoriteCard.html',
        controller: function($scope){
            console.log($scope.favorite);
        }
    }
})