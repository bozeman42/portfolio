app.controller('BlogController',function(BlogService){
  var vm = this;

  vm.posts = BlogService.posts;
  
});