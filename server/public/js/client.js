var app = angular.module('App',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/blog', {
    templateUrl: '/views/templates/blog.html',
    controller: 'BlogController as bc'
  })
  .when('/portfolio', {
    templateUrl: '/views/templates/portfolio.html'
  })
  .when('/about', {
    templateUrl: '/views/templates/about.html'
  })
  .when('/post/:post?', {
    templateUrl: '/views/templates/post.html',
    controller: 'PostController as pc'
  })
  // .when('/contact', {
  //   templateUrl: '/views/templates/contact.html'
  // })
  .otherwise({
    redirectTo: '/blog'
  });
})