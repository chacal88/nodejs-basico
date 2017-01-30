/**
 * Created by chacal on 30/01/17.
 */

var querystring = require('querystring');

function handle(request, response) {

    response.writeHead(200,{'Content-Type':'text/html'});

    var body = '';

    request.on('data',function (data) {
        body += data.toString();
         console.log('request',body);
    });

    request.on('end',function () {
        var decode = querystring.parse(body);
        console.log('end',decode);
    });

    response.write('<!DOCTYPE "html">');
    response.write('<html>');
    response.write('<head><title>Http Module</title>');
    response.write('<body>');
    response.write('<h1>Hello from http module SON</h1>');
    response.write('</body>');
    response.write('</html>');

    response.end();
}

exports.fn = handle;

// module.exports = handle;