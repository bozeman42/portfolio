var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/blog', {
    templateUrl: '/views/templates/home.html',
    controller: 'BlogController as bc'
  })
  .when('/portfolio', {
    templateUrl: '/views/templates/portfolio.html',
    controller: 'PortfolioController as pc'
  })
  .when('/about', {
    templateUrl: '/views/templates/about.html',
    controller: 'AboutController as ac'
  })
  .when('/post', {
    templateUrl: '/views/templates/post.html',
    controller: 'PostController as pc'
  })
  .when('/contact', {
    templateUrl: '/views/templates/contact.html',
    controller: 'ContactController as cc'
  })
  .otherwise({
    redirectTo: '/blog'
  });
})