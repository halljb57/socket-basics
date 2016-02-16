/**
 * Created by halljb57 on 2/16/2016.
 */
var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket)
{
    console.log('User connected via socket.io!');

    socket.on('message', function(message)
    {
        console.log('Message received: ' + message.text);
        // Broadcast to all but sender.
        // socket.broadcast.emit('message', message);
        // Broadcast to all browsers.
        /* message from the sender */
        message.timeStamp = moment().valueOf();
        io.emit('message', message);
    });

    // timestamp property - javascript timestamp (miliseconds)
    /* General message */
    socket.emit('message', {
        text: 'Welcome to the chat application!',
        timeStamp: moment().valueOf()
    });
});

http.listen(PORT, function()
{
    console.log('Server started!');
    console.log('http://127.0.0.1:' + PORT);
});