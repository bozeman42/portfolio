app.service('BlogService', function () {
  var bs = this;

  var TEMPLATE_ADDR = '../views/partials/posts/';

  function templateAddr(template){
    return TEMPLATE_ADDR + template;
  }

  var postObjectTemplate = {
    heading: '',
    subheading: '',
    date: '',
    author: '',
    tags: [],
    template: templateAddr('postNameHere.html')
  }

  bs.posts = {
    'first-post': {
      heading: 'This is a new test post',
      subheading: 'This might work!',
      date: 'January 31, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      template: templateAddr('first-post.html')
    }
  }
});