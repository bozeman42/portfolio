app.controller('PostController',function($location,BlogService){
  var vm = this;

  vm.getPost = function() {
    var address = location.hash.split('/')[1];
    if (vm.posts[address]) {
      vm.selectedPost = vm.posts[address];
      console.log(vm.selectedPost)
    } 
    // else {
    //   $location.path('/not-found');
    // }
  }

  vm.posts = BlogService.posts;
  vm.getPost();

});