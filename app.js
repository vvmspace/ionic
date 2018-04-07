let express = require('express');
let app     = express();
let http  = app.listen(7070);
let io      = require('socket.io').listen(http);

app.use(express.static('public'));

io.on('connection', function (socket) {
    socket.on('data', function (data) {
        io.emit('data', data);
    })
});