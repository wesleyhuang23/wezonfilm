
angular.module('wezApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('home', {
    templateUrl: 'js/home/homeTmpl.html',
    url: '/home', //url for when you search in the bar
    controller: 'filmCtrl'
  })
  .state('library', {
    templateUrl: 'js/library/libraryTmpl.html',
    url: '/library',
    controller: 'filmCtrl'
  })
  .state('amanda-knox-review',{
    templateUrl: 'js/reviews/amanda-knoxTmpl.html',
    url: '/amanda-knox-review',
    controller: 'reviewsCtrl'
  });

  $urlRouterProvider.otherwise('/home');

});
