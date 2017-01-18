angular.module('movieCardDirective', []).directive('movieCard', function(){
    return {
        restrict: 'E',
        scope: {
            movie: '='
        },
        templateUrl: './js/admin/contactCard.html',
        controller: function($scope){
            console.log($scope.movie);
        }
    }
})