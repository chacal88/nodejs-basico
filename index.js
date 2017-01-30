/**
 * Created by chacal on 30/01/17.
 */

// console.log('Hello World');
//
// var a = '2';
// var b = 2;
// var c = parseInt(a )+ b;
//
// console.log('c -> ',c);

var http = require('http');
var handle = require('./handle');

var events = require('events');
var emiter = new events.EventEmitter();

require('console-log-hello-world');

emiter.on('say',say);

function say() {
    console.log('Whatsappppp');
}

emiter.emit('say');

var server = http.createServer(handle.fn);

server.listen(3001, function () {
    console.log('Server is listen at port 3000');

});