/**
 * Created by halljb57 on 2/16/2016.
 */
var socket = io();

socket.on('connect', function()
{
    console.log('Connect to socket.io server!');
});

// This get fired every time a new message come in.
socket.on('message', function(message)
{
    var momentTimestamp = moment.utc(message.timeStamp); // Set timestamp

    // var momentTimeStamp
    console.log('New message');
    console.log(message.text);

    // Call any class with name of <messages>
    jQuery('.messages').append('<p><strong>' + momentTimestamp.local().format('h:mma: ') + '</strong>' + message.text +'</p>');
});

// Handles submitting of new message
// and get what is in form with ID <message-form>
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