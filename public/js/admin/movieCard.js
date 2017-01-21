angular.module('movieCardDirective', []).directive('movieCard', function(){
    return {
        restrict: 'E',
        scope: {
            film: '='
        },
        templateUrl: './js/admin/contactCard.html',
        controller: function($scope, filmSvc){
            console.log($scope.film);
            
        $scope.addToLibrary = function(film){
                console.log('film', film);
                filmSvc.addToLibrary(film).then(function(response){
                    console.log('added to library');
                });
            }
        }
    }
})