app.controller('PostController',function($location,BlogService){
  var vm = this;
  vm.posts = BlogService.posts;

  vm.getPost = function() {
    // read the post name from the address /#/post/[post-name]
    var address = location.hash.split('/')[2];
    // find the post with that that name
    vm.selectedPost = vm.posts.find(function(post){
      return (post.address == address);
    });
    // if the post isn't found, return to the blog page or a future /not-found page
    if (!vm.selectedPost) {
      $location.path('/not-found');
    }
  }

  vm.getPost();
});