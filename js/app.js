
angular.module('wezApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('home', {
    templateUrl: 'views/homeTmpl.html',
    url: '/', //url for when you search in the bar
    controller: 'homeCtrl'
  })
  .state('library', {
    templateUrl: 'views/libraryTmpl.html',
    url: '/library',
    controller: 'filmCtrl'
  })
  .state('contact', {
    templateUrl: 'views/contact.html',
    url: '/contact'
  });

  $urlRouterProvider.otherwise('/');

});
