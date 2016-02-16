/**
 * Created by halljb57 on 2/16/2016.
 */
var socket = io();

socket.on('connect', function()
{
    console.log('Connect to socket.io server!');
});

socket.on('message', function(message)
{
    console.log('New message');
    console.log(message.text);
});

// Handles sumitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event)
{
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message',
        {
            text: $message.val()
        });

    // Remove text after submit
    $message.val('');
});