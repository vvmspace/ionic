let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(7070, function () {
    console.log('Listening port 7070');
});