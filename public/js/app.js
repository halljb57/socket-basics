/**
 * Created by halljb57 on 2/16/2016.
 */
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join' + room);

// Update h1 tag
jQuery('.room-title').text(room);

socket.on('connect', function()
{
    console.log('Connect to socket.io server!');
    socket.emit('joinRoom',
        {
            name: name,
            room: room
        });
});

// This get fired every time a new message come in.
socket.on('message', function(message)
{
    var momentTimestamp = moment.utc(message.timeStamp); // Set timestamp
    var $message = jQuery('.messages');

    // var momentTimeStamp
    console.log('New message');
    console.log(message.text);

    // Call any class with name of <messages>
    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a: ') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
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
            name: name,
            text: $message.val()
        });

    // Remove text after submit
    $message.val('');
});