app.service('BlogService', function () {
  var bs = this;

  var TEMPLATE_ADDR = '../views/partials/posts/';

  function templateAddr(template) {
    return TEMPLATE_ADDR + template;
  }

  // TEMPLATE FOR POST OBJECT
  var postObjectTemplate = {
    index: 12,  //int
    address: '',
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
  bs.posts = [
    {
      index: 1,
      address: 'first-post',
      heading: 'Hello, World!',
      subheading: 'Welcome to my tech blog!',
      headerImage: 'img/post-bg.jpg',
      date: 'January 31, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      tags: ['First post', 'non-technical'],
      template: templateAddr('first-post.html')
    },
    {
      index: 2,
      address: 'GGJ2018',
      heading: "Global Game Jam 2018",
      subheading: "Diving in to new technology.",
      headerImage: 'img/ent-ro-py.jpg',
      date: 'January 31, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      tags: ['Games', 'c#', 'Unity', 'VR'],
      template: templateAddr('GGJ2018.html')
    },
    {
      index: 3,
      address: 'speech-apis',
      heading: "Speech APIs",
      subheading: "Speech recognition and synthesis in modern browsers.",
      headerImage: 'img/microphone.jpeg',
      date: 'March 6, 2018',
      author: 'Aaron Kvarnlov-Leverty',
      tags: ['HTML5','Voice Recognition'],
      template: templateAddr('speech-apis.html')
    },
  ]
});