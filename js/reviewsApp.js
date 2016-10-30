angular.module('reviewsApp',['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('amanda-knox-review',{
    templateUrl: 'js/reviews/amanda-knoxTmpl.html',
    url: '/amanda-knox-review',
    controller: 'reviewsCtrl'
  });


  $urlRouterProvider.otherwise('/amanda-knox-review');

});
