"use strict";
let express = require('express');
let app     = express();
let http  = app.listen(7070);
let io      = require('socket.io').listen(http);

app.use(express.static('public'));

io.set('origins', '*.*');

io.on('connection', (socket) => {
    socket.on('data', (data) => {
        io.emit('data', data);
    })
});