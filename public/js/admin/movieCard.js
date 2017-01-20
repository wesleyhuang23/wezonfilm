angular.module('movieCardDirective', []).directive('movieCard', function(){
    return {
        restrict: 'E',
        scope: {
            film: '='
        },
        templateUrl: './js/admin/contactCard.html',
        controller: function($scope){
            console.log($scope.film);
        }
    }
})