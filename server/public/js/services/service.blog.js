app.service('BlogService', function () {
  var bs = this;

  var TEMPLATE_ADDR = '../views/partials/posts/';

  function templateAddr(template){
    return TEMPLATE_ADDR + template;
  }

  // TEMPLATE FOR POST OBJECT
  var postObjectTemplate = {
    index: 12,
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
    'GGJ2018': {
      index: 2,
      heading: "Global Game Jam 2018",
      subheading: "Diving in to new technology.",
      headerImage: 'img/post-bg.jpg',
      date: 'January 31, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      tags: ['Games','c#','Unity','VR'],
      template: templateAddr('GGJ2018.html')
    },
    'first-post': {
      index: 1,
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