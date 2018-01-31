app.service('BlogService', function () {
  var bs = this;

  var TEMPLATE_ADDR = '../views/partials/posts/';

  function templateAddr(template){
    return TEMPLATE_ADDR + template;
  }

  // TEMPLATE FOR POST OBJECT
  var postObjectTemplate = {
    heading: '',
    subheading: '',
    headerImage: 'img/post-bg.jpg',
    date: '',
    author: '',
    // tag posts with arrays of strings
    tags: [],
    template: templateAddr('postNameHere.html')
  }


  // POSTS GO HERE
  bs.posts = {
    'first-post': {
      heading: 'Hello, World!',
      subheading: 'Welcome to my tech blog!',
      headerImage: 'img/post-bg.jpg',
      date: 'January 31, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      tags: ['First post','non-technical'],
      template: templateAddr('first-post.html')
    }
  }
});