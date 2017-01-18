
angular.module('wezApp', ['ui.router', 'movieCardDirective'])

.config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('home', {
    templateUrl: './../views/homeTmpl.html',
    url: '/', //url for when you search in the bar
    controller: 'homeCtrl'
  })
  .state('library', {
    templateUrl: './../views/libraryTmpl.html',
    url: '/library',
    controller: 'filmCtrl'
  })
  .state('reviews', {
    templateUrl: './../views/reviews.html',
    url: '/reviews/:id',
    controller: 'reviewsCtrl'
  })
  .state('favorites',{
    templateUrl: './../views/favorites.html',
    url: '/favorites/',
    controller: 'favCtrl'
  })
  .state('contact', {
    templateUrl: './../views/contact.html',
    url: '/contact'
  })
  .state('admin', {
    templateUrl: './../views/admin.html',
    url: '/admin',
    controller: 'adminCtrl'
  });

  $urlRouterProvider.otherwise('/');

});
