var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('./server/db')
var morgan = require('morgan');

//SOCKET requires
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//SOCKET
server.listen(8080, function() {
  console.log('listening on portato 8080')
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/dist');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

socket.on('disconnect', () => {
  console.log('A user disconnected');
})


//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/app/dist')))
require('./server/routes')(app, express);


module.exports = {
  app: app,
}