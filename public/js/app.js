/**
 * Created by halljb57 on 2/16/2016.
 */
var socket = io();

socket.on('connect', function()
{
    console.log('Connect to socket.io server!');
});