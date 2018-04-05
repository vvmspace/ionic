let express = require('express');
let app = express();
let io = require('socket-io')(app);

app.get('/', function (req, res) {
    res.send('home');
});

app.listen(7070, function () {
    console.log('Listening port 7070');
});