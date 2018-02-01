let express = require('express');
let app = express();
const PORT = 5000;

let postRouter = require('./routes/router.post');

app.use(express.static('server/public'));

// routes
app.use('/api/post',postRouter);


app.listen(PORT,() => console.log(`Listening on port ${PORT}...`))