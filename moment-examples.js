/**
 * Created by halljb57 on 2/16/2016.
 */
var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X')); // seconds
console.log(now.format('x')); // mili seconds
console.log(now.valueOf()); // javascript


var timestamp = 1455651211395;
var timestampMomnent = moment.utc(timestamp);

console.log(timestampMomnent.format());
console.log(timestampMomnent.local().format('h:mm a'));

//now.subtract(1, 'year');
//
//console.log(now.format());
//console.log(now.format('h:mma'));
//console.log(now.format('MMM Do YYYY, h:mma'));
