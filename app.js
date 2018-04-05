let express = require('express');
let bodyparser = require('body-parser');

app = express();

app.get('/', function (req, res) {
    res.send('home');
});

app.listen(7070, function () {
    console.log('Listening port 7070');
});