let express = require('express');
let app = express();
const PORT = 5000;

let postRouter = require('./routes/router.post');

app.use(express.static('server/public'));

// routes
app.use('/api/post', postRouter);

function getOpenPort(app, PORT) {

  app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
    .on('error', (error) => {
      console.log('error', error);
      if (error.code === 'EADDRINUSE'){
        PORT++;
        getOpenPort(app, PORT);
      }
    })
}

getOpenPort(app, PORT);
