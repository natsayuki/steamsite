const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const server = http.Server(app);
const io = socketio(server);

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
