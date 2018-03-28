var app = angular.module('App',['ngRoute','hc.marked']);

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
  .when('/100days-of-code', {
    templateUrl: '/views/templates/100days-of-code.html',
    controller: 'OneHundredDaysController as hc'
  })
  // .when('/contact', {
  //   templateUrl: '/views/templates/contact.html'
  // })
  .otherwise({
    redirectTo: '/blog'
  });

  app.config(['markedProvider', function (markedProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function (code, lang) {
        if (lang) {
          return hljs.highlight(lang, code, true).value;
        } else {
          return hljs.highlightAuto(code).value;
        }
      }
    });
  }]);
})